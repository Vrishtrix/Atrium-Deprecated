const Hapi = require('@hapi/hapi');
const ck = require('ckey');
const Login = require('../actions/loginAction.js')
const Register = require('../actions/RegisterAction.js')
const Path = require('path')

const start = async () => {
      const server = Hapi.server
            ({
                  port: 80,
                  host: '0.0.0.0',
                  routes: {
                        files: {
                              relativeTo: Path.join(__dirname, 'public')
                        }
                  }

            });

      await server.register(require('@hapi/inert'))

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
                  if (request.params.verify === ck.VERIFY) {
                        return (Login(request.params.email, request.params.password))
                  }
                  else {
                        return h.file('index.html');
                  }

            }
      });

      server.route({
            path: '/css/{path*}',
            method: 'GET',
            handler: {
                  directory: {
                        path: 'css',
                        listing: false,
                        index: false
                  }
            }
      })

      //API routing for register
      server.route({
            method: 'GET',
            path: '/api/register',
            handler: (request, h) => {
                  if (request.params.verify === ck.VERIFY) {
                        return (Register(request.params.email, request.params.password, request.params.firstname, request.params.lastname, request.params.phone))
                  }
                  else {
                        return h.file('./index.html');
                  }


            }
      });


      server.route({
            method: 'GET',
            path: '/api',
            handler: (request, h) => {
                  return h.file('./index.html')

            }
      });

      server.route({
            method: 'GET',
            path: '/api/',
            handler: (request, h) => {
                  return h.file('./index.html')

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