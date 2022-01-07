const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));

app.set("view engine", "hbs");

const data = {
  name: "Sahy",
}

app.get('/', (req, res) => {
  try {
    console.log("겟!!!!!!!!!!!!!!! ///////");

    res.render("index", data)

  } catch (err) {
      console.error(err);

      res.status(400).send({
        ok: false,
        message: `${err} ㅇㅔ러 발생`
      })
  }
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
    const reqBody = req.body
    const reqParams = req.params
    const reqQuery = req.query
    const reqMethods = req.methods
    const reqUrl = req.url
    console.error("포스트 하이!!!!!!!!!! 에러 아니야!!!!!!!!!!");
    console.log("req.body", req.body);
    console.log("헤더~~~!!!!~~~~~~~~~~~~~~~~~~~~~~", req.headers)
    console.error("--------절--------------취--------------선---------------")

    res.status(200).send({
      ok: true,
      reqBody,
      reqParams,
      reqQuery,
      reqMethods,
      reqUrl
    });

  } catch (err) {
      console.error(err);

      res.status(400).send({
        ok: false,
        message: `${err} ㅇㅔ~~~~~~~~~~~~~~~~~~러 발생 =>`
      })
  }
})

// var httpss = require('follow-redirects').https;
// // var fs = require('fs');

// var option = {
//   'method': 'GET',
//   'hostname': 'https://fs.tokopedia.net',
//   'path': '/inventory/v1/fs/15919/product/info?sku=k8k',
//   'headers': {
//     'Authorization': 'Bearer  c:TL8xZs91TeWwS9E859-_ow'
//   },
//   'maxRedirects': 20
// };

// var req = httpss.request(option, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();


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