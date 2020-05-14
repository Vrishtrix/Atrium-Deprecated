const connection = require('../config/config');

module.exports = async (firstname, date, time, arenaid, bookingid, email, phone) => {
    return new Promise((resolve, reject) => {
        const bookings = {
            'firstname': [firstname],
            'date': [date],
            'time': [time],
            'arenais': [arenaid],
            'bookingid': [bookingid],
            'email': [email],
            'phone': [phone]
        }

        connection.query('INSERT INTO bookings SET ?', bookings, async (error, results, fields) => {
            if (error) {
                return resolve({
                    'code': 400,
                    'status': 'Booking Failed'
                })

            } else {
                return resolve({
                    'code': 200,
                    'status': 'Booking Confirmed'
                });
            };


        });


    });
}