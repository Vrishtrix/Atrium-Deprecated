const Hapi = require('@hapi/hapi');
const login = require('../actions/login')
const register = require('../actions/register.js')
const courtbookings = require('../actions/courtbookings')
const retrievebookings = require('../actions/retrievebookings')
const verify = '62fe5e897218bcf843eefea0'


const start = async () => {
      const server = Hapi.server
            ({
                  port: 80,
                  host: '0.0.0.0',

            });


      //For react, dont edit
      server.route({
            method: 'GET',
            path: '/{path}',
            handler: (request, h) => {
                  return [];
            }
      });

      //API routing for login
      /*server.route({
            method: 'POST',
            path: '/api/login/email',
            handler: async (request, h) => {
                  const payload = request.payload
                  if (payload.verify === verify) {

                        return (login.login_email(payload.email, payload.password))
                  }
                  else {
                        return 'Error 404. Page not found'
                  }


            }
      });*/


      server.route({
            method: 'POST',
            path: '/api/login/otp/gen',
            handler: async (request, h) => {
                  const payload = request.payload
                  if (payload.verify === verify) {

                        return (login.otp_gen(payload.phone))
                  }
                  else {
                        return 'Error 404. Page not found'
                  }


            }
      });


      server.route({
            method: 'POST',
            path: '/api/login/otp/verify',
            handler: async (request, h) => {
                  const payload = request.payload
                  if (payload.verify === verify) {

                        return (login.otp_verify(payload.phone, payload.otp, payload.hash))
                  }
                  else {
                        return 'Error 404. Page not found'
                  }


            }
      });



      //API routing for register
      server.route({
            method: 'POST',
            path: '/api/register',
            handler: async (request, h) => {
                  const payload = request.payload
                  if (payload.verify === verify) {
                        return (register(payload.firstname, payload.lastname, payload.phone))
                  }
                  else {
                        return 'Error 404. Page not found'
                  }


            }
      });



      //API routing for court bookings

      server.route({
            method: 'POST',
            path: '/api/bookings',
            handler: (request, h) => {
                  const payload = request.paylaod
                  if (payload.verify === verify) {

                        return (courtbookings(payload.firstname, payload.date, payload.time, paylaod.arenaid, payload.bookingid, payload.phone))

                  }
                  else {
                        return '404 Page not found';
                  }

            }
      });

      server.start();
      console.log(`Server running on ${server.info.uri} `);
}

process.on('unhandledRejection', err => {
      console.error(err);
      process.exit(1);
});

start();