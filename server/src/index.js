const Hapi = require('@hapi/hapi');
const ck = require('ckey');
const login = require('../actions/login.js')
const register = require('../actions/register.js')


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
      server.route({
            method: 'POST',
            path: '/api/login',
            handler: async (request, h) => {
                  const payload = request.payload
                  if (payload.verify = ck.VERIFY){
                        return(login(payload.email , payload.password ))
                  }
                  else{
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
                  if (payload.verify = ck.VERIFY){
                        return(register(payload.email , payload.password ,payload.firstname, payload.lastname , payload.phone))
                  }
                  else{
                        return 'Error 404. Page not found'
                  }
                  
                  
            }
      });



  

      server.route({
            method: 'POST',
            path: '/api/',
            handler: (request, h) => {
                  return '404 Page not found';

            }
      });

      server.start();
      console.log(`Server running on ${server.info.uri} , ${ck.V} `);
}

process.on('unhandledRejection', err => {
      console.error(err);
      process.exit(1);
});

start();