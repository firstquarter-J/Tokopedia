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

// Local HTTP or AWS Server HTTPS
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
      console.log(
        `\x1b[1;3;31m안
  \x1b[0m\x1b[1;3;33m녕\x1b[0m
    \x1b[1;3;32m난\x1b[0m
      \x1b[1;3;36m서\x1b[0m
        \x1b[1;3;34m버\x1b[0m
          \x1b[1;3;35m야\x1b[0m`)
    });
} catch (err) {
  console.error(err)
  const port = 3000;
  app.listen(port, () => {
      console.log(
        `\x1b[1;3;31m안
  \x1b[0m\x1b[1;3;33m녕\x1b[0m
    \x1b[1;3;32m난\x1b[0m
      \x1b[1;3;36m서\x1b[0m
        \x1b[1;3;34m버\x1b[0m
          \x1b[1;3;35m야\x1b[0m
            \x1b[1;3;36mhttp://localhost:${port}\x1b[0m`)
  })
}

app.get('/', (req, res) => {
  try {
    console.log('\x1b[1;3;31m하\x1b[0m');
    console.log('\x1b[1;3;33m  잉\x1b[0m');
    console.log('\x1b[1;3;32m    지\x1b[0m');
    console.log('\x1b[1;3;36m      금\x1b[0m');
    console.log('\x1b[1;3;34m        은\x1b[0m');
    console.log('\x1b[1;3;35m          몇\x1b[0m');
    console.log('\x1b[1;3;30m            시~?\x1b[0m');
    console.log('\x1b[1;3;36m                \x1b[0m', `\x1b[1;36m${new Date()}\x1b[0m`);
    // console.log('\x1b[30m30= 검은색\x1b[0m');
    // console.log('\x1b[1;30m30 bold = 회색\x1b[0m');
    // console.log('\x1b[31m31 = 빨간색\x1b[0m');
    // console.log('\x1b[1;31m31 bold = 밝은 빨간색\x1b[0m');
    // console.log('\x1b[32m32 = 초록색\x1b[0m');
    // console.log('\x1b[1;32m32 bold = 밝은 초록색\x1b[0m');
    // console.log('\x1b[33m33\x1b[0m');
    // console.log('\x1b[1;33m33\x1b[0m');
    // console.log('\x1b[34m34\x1b[0m');
    // console.log('\x1b[1;34m34\x1b[0m');
    // console.log('\x1b[35m35\x1b[0m');
    // console.log('\x1b[1;35m35\x1b[0m');
    // console.log('\x1b[36m36\x1b[0m');
    // console.log('\x1b[1;36m36\x1b[0m');
    // console.log('\x1b[37m37\x1b[0m');
    // console.log('\x1b[1;37m37\x1b[0m');

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

app.get('/hi', (req, res) => {
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

app.put('/hi', (req, res) => {
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