const fs   = require('fs');
const jwt = require("jsonwebtoken")
const privateKEY  = fs.readFileSync('./keys/private.key', 'utf8');


module.exports = async(firstname, lastname, email, phone) => {
    return new Promise((resolve , reject) => {
        const data = {firstname , lastname , email , phone}
        const signOptions = { issuer: 'Atrium', subject: 'Login', audience: 'atrium.com', expiresIn: "48h", algorithm: "RS256" };
        jwt.sign(data, privateKEY, signOptions, (err, token) => resolve({
            status: true,
            token: token
        }))
    })
   
}