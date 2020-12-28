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

module.exports = proxy