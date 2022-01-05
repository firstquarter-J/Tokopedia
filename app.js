const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('나랑 싸우자 토코피디아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ')
})

// LOCAL ONLY
// const port = 3000;
// app.listen(port, () => {
//     console.log(`listening at http://localhost:${port}`)
// })

// HTTPS
app.use(express.static('public'));
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

// Tokopedia Webhook Test

app.post('/hi', (req, res) => {
  res.send(req.body.message);
})

const crypto = require('crypto')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const YOUR_WEBHOOK_KEY = 'YOUR_SECRET'

app.post('/listener', (req, res) => {
  // Encrypt with SHA-256 and Encode to hexadecimal
  let hmac = crypto.createHmac('sha256', YOUR_WEBHOOK_KEY)
    .update(JSON.stringify(req.body))
    .digest('hex')

  // Compare our HMAC with your HMAC
  if(!crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(req.get('Authorization-Hmac')))) {
      console.log('Failed to verify!')
      return
  }
  console.log('Successfully verified!')
});