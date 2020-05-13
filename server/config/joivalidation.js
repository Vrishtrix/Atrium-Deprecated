const Joi = require('@hapi/joi');
global.success = 'false'

module.exports = async (email, password) => {
    return new Promise((resolve, reject) => {
        const Joi = require('@hapi/joi');

        const schema = Joi.object().keys({

            password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            email: Joi.string().email().required()
        });

        email = [email]
        password = [password]

        let data = { username, email };

        Joi.validate(data, schema, (err, value) => {

            if (err) {

                return resolve('Check your parameters' , success = false);

            } else {

                return resolve("Validation Successful" , success = true);
            }
        });

    })
}