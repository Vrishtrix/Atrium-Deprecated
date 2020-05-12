module.exports = async (email, password) => {

    const jwt = require('jsonwebtoken');
    const argon2 = require('argon2')
    const connection = require('../src/config');

    connection.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            return ({
                status: false,
                message: 'Error with the query'
            })
        } else {
            if (results.length > 0) {
                const compare = await argon2.verify(results[0].password, password)
                if (compare) {
                    const data = { 'firstname': results[0].firstname, 'lastname': results[0].lastname, "email": results[0].email, "phone": results[0].phone }
                    const signOptions = { issuer: 'Atrium', subject: 'Login', audience: 'atrium.com', expiresIn: "48h", algorithm: "HS256" };
                    const token = jwt.sign(data, process.env.SECRET_KEY, signOptions)
                    console.log('Authenticated')
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
    connection.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Database Connection Closed.');
    });
}