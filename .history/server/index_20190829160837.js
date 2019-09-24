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

/*
app.post('/', (req,res) => {
    let lti_message = req.body.lti_message_type
    console.log('POST recieved', lti_message)
    res.redirect('https://localhost:3000') 
})
*/

app.post('/', (req,res) => {
    let lti_message = req.body.lti_message_type
    let lti_version = req.body.lti_version
    let link_id = req.body.resource_link_id
    let context_id = req.body.context_id
    let user_id = req.body.user_id
    let custom_canvas_user_id = req.body.custom_canvas_user_id
    let roles = req.body.roles
    let oauth_consumer_key = req.body.oauth_consumer_key
    let oauth_nonce = req.body.oauth_nonce
    let oauth_timestamp = req.body.oauth_timestamp
    let oauth_signature = req.body.oauth_signature
    let launch_presentation_return_url = req.body.launch_presentation_return_url
    let lti_msg = launch_presentation_return_url.lti_msg

    console.log(launch_presentation_return_url, lti_msg)
   if (oauth_nonce == undefined || oauth_nonce.toString().length < 1) {
     // res.setHeader('Content-Type', 'application/json');
     // res.send(JSON.stringify({ lti_message_type: `${lti_message}` }));
     res.send("ERROR, contact your System admin")
   } else {
   // res.redirect('https://localhost:3000')
      res.redirect(launch_presentation_return_url + '&lti_errorlog=The floor\'s on fire... see... *&* the chair.')
   }
  
    });

