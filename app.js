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
        message: `ㅇㅔ~~~~~~~~~~~~~~~~~~러 발생 => ${err}`
      })
  }
})

// LOCAL ONLY
const port = 3000;
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

// HTTPS
// app.use(express.static('public'));
// const fs = require('fs');
// const http=require("http");
// const https=require("https");

// const options = {
//   ca: fs.readFileSync('/etc/letsencrypt/live/firstquarter.shop/fullchain.pem'),
//   key: fs.readFileSync('/etc/letsencrypt/live/firstquarter.shop/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/firstquarter.shop/cert.pem')
//   };
//   http.createServer(app).listen(3000);
//   https.createServer(options, app).listen(443);

// Tokopedia Webhook Test

app.post('/hi', (req, res) => {
  try {
    const reqBody = req.body
    const reqParams = req.params
    const reqQuery = req.query
    const reqMethods = req.methods
    const reqUrl = req.url
    console.error("포스트 하이!!!!!!!!!! 에러 아니야!!!!!!!!!!");
    console.log("req.body => ", req.body);
    console.log("req.headers => ", req.headers)
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
        message: `ㅇㅔ~~~~~~~~~~~~~~~~~~러 발생 => ${err}`
      })
  }
})