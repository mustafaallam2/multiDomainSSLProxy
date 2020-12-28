const app = require('./app')
const proxy = require('./proxy')



app.listen(8080,'127.0.0.1',()=>{
  console.log('app is serving on 127.0.0.1')

  // register the main domain after the server starts correctly
  proxy.register('test.mustafaallam.com', 'http://127.0.0.1:8080', {
    ssl: {
      letsencrypt: {
        email: 'me@mustafaallam.com', // Domain owner/admin email
        production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
      }
    }
  });

})



