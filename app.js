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
  try {
    const { message } = req.body
    console.log("포스트 하이")
    console.log("리퀘스트", req)
    console.log("리스폰스", res)

    res.status(200).send({
      ok: true,
      req,
      res,
      message
    });

  } catch (err) {
      console.error(err);

      res.status(400).send({
        ok: false,
        message: `${err} ㅇㅔ러 발생`
      })
  }
})

app.get('/hi', (req, res) => {
  try {
    const { message } = req.body
    console.log("겟 하이")
    console.log("리퀘스트", req)
    console.log("리스폰스", res)

    res.status(200).send({
      ok: true,
      req,
      res,
      message
    });

  } catch (err) {
      console.error(err);

      res.status(400).send({
        ok: false,
        message: `${err} ㅇㅔ러 발생`
      })
  }
})

// const crypto = require('crypto')
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())

// const YOUR_WEBHOOK_KEY = 'YOUR_SECRET'

// app.post('/listener', (req, res) => {
//   // Encrypt with SHA-256 and Encode to hexadecimal
//   let hmac = crypto.createHmac('sha256', YOUR_WEBHOOK_KEY)
//     .update(JSON.stringify(req.body))
//     .digest('hex')

//   // Compare our HMAC with your HMAC
//   if(!crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(req.get('Authorization-Hmac')))) {
//       console.log('Failed to verify!')
//       return
//   }
//   console.log('Successfully verified!')
// });