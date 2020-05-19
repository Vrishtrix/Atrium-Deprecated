const connection = require('../config/config')
const jwtsign = require('../config/jwtsign')
const ck = require('ckey')
const otpGenerator = require("otp-generator");
const messagebird = require('messagebird')(ck.API)
const crypto = require("crypto");
const key = ck.OTP_KEY;



module.exports.verify_otp = async (phone, otp, hash, ) => {

  return new Promise(async (resolve, reject) => {
    let [hashValue, expires] = hash.split(".");

    let now = Date.now();
    if (now > parseInt(expires)) return resolve('Code expired');

    let data = `${phone}.${otp}.${expires}`;
    let newCalculatedHash = crypto.createHmac("sha256", key).update(data).digest("hex");

    if (newCalculatedHash === hashValue) {

      connection.query('SELECT * FROM users WHERE phone = ?', [phone],
        async (error, results, fields) => {


          return resolve(

            jwtsign(results[0].firstname, results[0].lastname, results[0].phone)


          )

        }

      );
    }
    else {
      return resolve({
        'status': 'unsuccessful',
        'token': null

      })
    }
  })
}




module.exports.gen_otp = async (phone) => {

  return new Promise(async (resolve, reject) => {
    connection.query('SELECT * FROM users WHERE phone = ?', [phone],
      async (error, results, fields) => {

        if (results.length > 0) {
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
        else {
          return resolve({
            'status': false,
            'hash': null
          });

        }

      });
  })
}



