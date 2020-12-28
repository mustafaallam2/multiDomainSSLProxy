const express = require("express");
const app = express();
const proxy = require('./proxy')

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/test", (req, res) => {
    res.send("Hello, World! from test");
})

app.get("/:domain", (req, res) => {
    
      proxy.register(req.params.domain, 'http://127.0.0.1:8080', {
          ssl: {
              letsencrypt: {
                  email: 'me@mustafaallam.com', // Domain owner/admin email
                  production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
              }
          }
      });
})

module.exports = app;