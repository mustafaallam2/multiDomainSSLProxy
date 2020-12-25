const app = require('./app')

const proxy = require('redbird')({
    port: 80, // http port is needed for LetsEncrypt challenge during request / renewal. Also enables automatic http->https redirection for registered https routes. 
    letsencrypt: {
      path: __dirname + '/certs',
      port: 9999 // LetsEncrypt minimal web server port for handling challenges. Routed 80->9999, no need to open 9999 in firewall. Default 3000 if not defined.
    },
    ssl: {
      port: 443, // SSL port used to serve registered https routes with LetsEncrypt certificate.
    },
    // disable logging  
    bunyan: false
  });


app.listen(8080,'127.0.0.1',()=>{
  console.log('app is serving on 127.0.0.1')
})


  proxy.register('test.mustafaallam.com', 'http://127.0.0.1:8080', {
  ssl: {
    letsencrypt: {
      email: 'me@mustafaallam.com', // Domain owner/admin email
      production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});

  proxy.register('test2.mustafaallam.com', 'http://127.0.0.1:8080', {
  ssl: {
    letsencrypt: {
      email: 'me@mustafaallam.com', // Domain owner/admin email
      production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});