const argon2 = require('argon2')
const connection = require('../config/config');
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
                    "code": 400,
                    "failed": "An error ocurred"
                })
            } else {
                console.log('Registered successfully')
                return resolve({
                    "code": 200,
                    "success": "User registered sucessfully"
                });
            }
        });
    })




}



