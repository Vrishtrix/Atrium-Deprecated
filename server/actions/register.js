const ck = require('ckey')
const argon2 = require('argon2')
const connection = require('../config/config');
const messagebird = require('messagebird')(ck.API)
const crypto = require("crypto");
const key = ck.OTP_KEY;

const otpGenerator = require("otp-generator");

module.exports = async (firstname, lastname, phone) => {
    return new Promise(async (resolve, reject) => {

        const users = {
            "firstname": [firstname],
            "lastname": [lastname],
            "phone": [phone]


        }
        connection.query('INSERT INTO users SET ?', users, async (error, results, fields) => {
            if (error) {
                console.log(error)
                return resolve({
                    "status": false,
                    "hash": null
                })
            } else {
                const otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
                const ttl = 5 * 60 * 1000; 
                const expires = Date.now() + ttl;
                const data = `${phone}.${otp}.${expires}`; 
                const hash = crypto.createHmac("sha256", key).update(data).digest("hex"); 
                const fullHash = `${hash}.${expires}`; 



                var params = {
                    'originator': 'Atrium',
                    'recipients': [
                        `+91` + phone
                    ],
                    'body': `Your OTP for logging into Atrium is ${otp}`

                };

                await messagebird.messages.create(params, async (err, response) => {

                    console.log(response)


                });
                return resolve({
                    'status': true,
                    'hash': fullHash

                })



            }
        });
    })




}



