const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app =  express();
const https = require('https');
const fs = require('fs');
var OAuthClient = require('intuit-oauth');

// ouath client
var oauthClient = new OAuthClient({
    clientId: '26e26a82a51cdd2826246bd352ed5aa4',
    clientSecret: '6088346c950e199d37767f95149cba8c',
    environment: 'sandbox' || 'production',
    redirectUri: 'https://localhost:3001'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

https.createServer({
    key: fs.readFileSync('./server/key.pem'),
    cert: fs.readFileSync('./server/cert.pem'),
    passphrase: 'test1'
}, app).
listen(3001, () =>
console.log('Express server is running on localhost:3001')
);

app.get('/', (req, res) => {
    const name = req.query.name || 'World';
//    res.setHeader('Content-Type', 'application/json');
//    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
    //  res.send('Welcome to Canvas Admin Panel LTI API')
      res.redirect('https://localhost:3000') 
});


app.post('/', (req,res) => {
    let lti_message = req.body.lti_message_type
    console.log('POST recieved', lti_message)
    res.redirect('https://localhost:3000') 
})

app.post('/', (req,res) => {
    const lti_message = req.body.lti_message_type
    const lti_version = req.body.lti_version
    const link_id = req.body.resource_link_id
    const context_id = req.body.context_id
    const user_id = req.body.user_id
    const custom_canvas_user_id = req.body.custom_canvas_user_id
    const roles = req.body.roles
    const oauth_consumer_key = req.body.oauth_consumer_key
    const oauth_nonce = req.body.oauth_nonce
    const oauth_timestamp = req.body.oauth_timestamp
    const oauth_signature = req.body.oauth_signature


   if (oauth_nonce == undefined || oauth_nonce.toString().length < 1) {
     // res.setHeader('Content-Type', 'application/json');
     // res.send(JSON.stringify({ lti_message_type: `${lti_message}` }));
     res.send("ERROR, contact your System admin")
   } else {
    res.redirect('https://localhost:3000')
   }
    console.log('POST recieved', oauth_nonce)
    });

