const express = require('express')
const app = express()

// HTTPS 인증 폴더 ~?
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

// Tokopedia Webhook Test
app.post('/listener', (req, res) => res.send('Hello, World!'));

app.post('/listener2', (req, res) => {
    res.send(req.body.message);
})

// HTTPS 경로 설정 ~?
const fs = require('fs');
const http=require("http");
const https=require("https");

const options = {
  ca: fs.readFileSync('/etc/letsencrypt/live/firstquarter.shop/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/firstquarter.shop/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/firstquarter.shop/cert.pem')
  };
  http.createServer(app).listen(3000);
  https.createServer(options, app).listen(443);
