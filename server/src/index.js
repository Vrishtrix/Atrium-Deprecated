const Hapi = require('@hapi/hapi');
const jwt = require('jsonwebtoken');

const doLogin = require('../actions/loginAction.js')

const init = () => {
      const server = Hapi.server({
            port: 80,
            host: '0.0.0.0'
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
      server.route({
            method: 'GET',
            path: '/api/login',
            handler: (request, h) => {
                  email = request.params.email
                  password = request.params.password
                  return (doLogin(email, password))
            }




      });
      //API routing for register
      server.route({
            method: 'GET',
            path: '/api/register',
            handler: (request, h) => {

            }
      });

      /*
      server.route({
            method: 'GET',
            path: '/api/___',
            handler: (request, h) => {
                  
            }
      });
      */
      server.start();
      console.log(`Server running on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
      console.error(err);
      process.exit(1);
});

init();