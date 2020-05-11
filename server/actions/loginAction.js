module.exports = (email, password) => {

    const jwt = require('jsonwebtoken');
    const argon2 = require('argon2')
    const connection = require('../src/config');
    const encryptedpass = argon2.hash(password)

    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            return ({
                status: false,
                message: 'Error with the query'
            })
        } else {
            if (results.length > 0) {
                if (encryptedpass === results[0].password) {
                    const data = { 'firstname': results[0].firstname, 'lastname': results[0].lastname, "email": results[0].email, "phone": results[0].phone }
                    const signOptions = { issuer: Atrium, subject: Login, audience: atrium.com, expiresIn: "48h", algorithm: "RS256" };
                    const token = jwt.sign(data, process.env.SECRET_KEY, signOptions)
                    //console.log('Authenticated')
                    return ({
                        status: true,
                        token: token
                    })
                } else {
                    //console.log('Not authenticated')
                    return ({
                        status: false,
                        message: "Email and password does not match",

                    });
                }

            }
            else {
                //console.log('Not authenticated')
                return ({
                    status: false,
                    message: "Email does not exits"
                });
            }
        }
    });
}