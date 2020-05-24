const otpGen = require("otp-generator");
const otpTool = require("otp-without-db");
const key = "secretKey"; // Use unique key and keep it secret
const fs = require('fs');
const jwt = require("jsonwebtoken")
const privateKEY = fs.readFileSync('./keys/private.key', 'utf8');
const messagebird = require('messagebird')(process.env.API)

module.exports.checkphone = async (phone) => {
    try {
        const otp = otpGen.generate(6, { upperCase: false, specialChars: false, alphabets: false });
        const hash = otpTool.createNewOTP(phone, otp, key);
        this.sendotp(otp, phone)
        return ({
            "status": true,
            "code": 100,
            "token": hash
        })

    }
    catch (err) {
        return ("Server error")
    }

}


module.exports.tokencreate = async (id, firstname, lastname, phone) => {
    try {

        const data = { id, firstname, lastname, phone }
        const signOptions = { issuer: 'Atrium', subject: 'Login', audience: 'atrium.com', expiresIn: "48h", algorithm: "RS256" };
        token = await jwt.sign(data, privateKEY, signOptions)
        return ({
            status: true,
            "code": 100,
            token: token
        })
    }
    catch (err) {
        return ("Server error")
    }
}

module.exports.sendotp = async (otp, phone) => {
    try {
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
    }
    catch (err) {
        return ("Server error")
    }
}

