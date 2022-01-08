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

// Local HTTS or AWS Server HTTPS
try {
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
    https.createServer(options, app).listen(443, () => {
      console.log(`\x1b[1;36m안녕 서버~?\x1b[0m`)
    });
} catch (err) {
  console.error(err)
  const port = 3000;
  app.listen(port, () => {
      console.log(`\x1b[1;35m안녕 로컬 서버~~~\x1b[0m \x1b[1;36mhttp://localhost:${port}\x1b[0m`)
  })
}

app.get('/', (req, res) => {
  try {

    const date = new Date(); 
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); 
    const utcTimeAddKoreaTime = 9 * 60 * 60 * 1000; 
    const koreaTime = new Date(utcTime + utcTimeAddKoreaTime);
    console.log(koreaTime)

    console.log('\x1b[1;35m하잉~~~\x1b[0m', `\x1b[1;36m${new Date().toString()}\x1b[0m`);

    res.render("index", data)

  } catch (err) {
      console.error(err);

      res.status(400).send({
        ok: false,
        message: `ㅇㅔ~~~~~~~~~~~~~~~~~~러 발생 => ${err}`
      })
  }
})


// Tokopedia Webhook Test

app.post('/hi', (req, res) => {
  try {
    const reqBody = req.body
    const reqParams = req.params
    const reqQuery = req.query
    const reqMethods = req.methods
    const reqUrl = req.url
    console.log("\x1b[1;36mreq.body => \x1b[0m", req.body);
    console.log("\x1b[1;33mreq.headers => \x1b[0m", req.headers);
    console.log(`\x1b[1;31m--------절--------------취--------------선---------------\x1b[0m`)

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
        message: `ㅇㅔ~~~~~~~~~~~~~~~~~~러 발생 => ${err}`
      })
  }
})