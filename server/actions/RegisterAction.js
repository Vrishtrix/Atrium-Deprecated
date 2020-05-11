module.exports = (email, password, firstname, lastname, phone) => {
    const bcrypt = require('bcrypt')
    const connection = require('./../config/config');
    const encryptpass = bcrypt.hash(password, 10);
    const users = {
        "email": [email],
        "password": encryptpass,
        "firstname": [firstname],
        "lastname": [lastname],
        "phone": [phone]


    }
    connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
        if (error) {
            //console.log('Error occured')
            return ({
                "code": 400,
                "failed": "An error ocurred"
            })
        } else {
            //console.log('Registered successfully')
            return ({
                "code": 200,
                "success": "User registered sucessfully"
            });
        }
    });
}



