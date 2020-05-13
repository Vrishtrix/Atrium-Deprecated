const argon2 = require('argon2')
const connection = require('../config/config');
module.exports = async (email, password, firstname, lastname, phone) => {
    const encryptpass = await argon2.hash(password)
    return new Promise((resolve, reject) => {
        
        const users = {
            "email": [email],
            "password": encryptpass,
            "firstname": [firstname],
            "lastname": [lastname],
            "phone": [phone]
    
    
        }
        connection.query('INSERT INTO users SET ?', users, async  (error, results, fields) => {
            if (error) {
                console.log(error)
                return resolve ({
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



