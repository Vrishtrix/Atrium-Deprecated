const connection = require('../config/config')
const argon2 = require('argon2')
const jwtsign = require('../config/jwtsign')


module.exports = async (email, password) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE email = ?', [email],
            async (error, results, fields) => {
                if (error) {
                    return resolve({
                        status: false,
                        message: 'Error with the query'
                    })
                } else {
                    if (results.length > 0) {
                        const compare = await argon2.verify(results[0].password, password)
                        if (compare) {
                            return resolve(jwtsign(results[0].firstname, results[0].lastname, results[0].email, results[0].phone))

                        } else {
                            //console.log('Not authenticated')
                            return resolve({
                                status: false,
                                message: "Email and password does not match",

                            });
                        }

                    }
                    else {
                        //console.log('Not authenticated')
                        return resolve({
                            status: false,
                            message: "Email does not exits"
                        });

                    }
                }
            });

    })
}
