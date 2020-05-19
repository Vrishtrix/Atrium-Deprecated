const Hapi = require('@hapi/hapi');
const login = require('../actions/login')
const register = require('../actions/register.js')
const verify = '62fe5e897218bcf843eefea0'
const PORT = process.env.PORT || 3000


const start = async () => {
      const server = Hapi.server
            ({
                  port: PORT,
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


      server.route({
            method: 'POST',
            path: '/api/login/otp/gen',
            handler: async (request, h) => {
                  const payload = request.payload
                  if (payload.verify === verify) {

                        return (login.gen_otp(payload.phone))
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

                        return (login.verify_otp(payload.phone, payload.otp, payload.hash))
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


      server.start();
      console.log(`Server running on ${server.info.uri} `);
}

process.on('unhandledRejection', err => {
      console.error(err);
      process.exit(1);
});

start();