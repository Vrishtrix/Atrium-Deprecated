module.exports = async (email, password, firstname, lastname, phone) => {

    const argon2 = require('argon2')
    const connection = require('../src/config');
    const encryptpass = await argon2.hash(password)
    const users = {
        "email": [email],
        "password": encryptpass,
        "firstname": [firstname],
        "lastname": [lastname],
        "phone": [phone]


    }
    connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
        if (error) {
            console.log(error)
            return ({
                "code": 400,
                "failed": "An error ocurred"
            })
        } else {
            console.log('Registered successfully')
            return ({
                "code": 200,
                "success": "User registered sucessfully"
            });
        }
    });
    connection.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Database Connection Closed.');
    });
}



