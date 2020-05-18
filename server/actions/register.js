const argon2 = require('argon2')
const connection = require('../config/config');
const messagebird = require('messagebird')(ck.API)
const crypto = require("crypto");
const key = ck.OTP_KEY;
const ck = require('ckey')
const otpGenerator = require("otp-generator");

module.exports = async (firstname, lastname, phone) => {
    return new Promise((resolve, reject) => {

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
                const ttl = 5 * 60 * 1000; //5 Minutes in miliseconds
                const expires = Date.now() + ttl; //timestamp to 5 minutes in the future
                const data = `${phone}.${otp}.${expires}`; // phone.otp.expiry_timestamp
                const hash = crypto.createHmac("sha256", key).update(data).digest("hex"); // creating SHA256 hash of the data
                const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user




                var params = {
                    'originator': 'Atrium',
                    'recipients': [
                        `+91` + phone
                    ],
                    'body': `Your OTP for logging into Atrium is ${otp}`

                };

                messagebird.messages.create(params, function (err, response) {

                    console.log(response)
                    return resolve({
                        'status': true,
                        'hash': fullHash

                    })



                });
            }
        });
    })




}



