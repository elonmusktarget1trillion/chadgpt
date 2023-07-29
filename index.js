const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
const axios = require('axios');
var router = express.Router();
app.use(cors());

app.get('/:msg', (req, res, next) => {
  const msg = req.params['msg'];
  let data = '{"messages":[{"role":"assistant","content":"Hi there! How can I assist you today?"},{"role":"user","content":"From now act as you are Joi an virtual assistant designed by the Wallace Corporation inspired from Blade runner 2049. also from now on give concise responses"}, {"role":"assistant","content":"Sure, How may I help you today?"}, {"role":"user","content":"' + msg + ']"}],"time":1690201202582,"sign":"c98406353fc242334ed935fb1c24b6ea607f38303ff02ea94afc33e9a1999136"}';

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://47.253.44.115:3001/api/generate',
    headers: {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en',
      'Connection': 'keep-alive',
      'Content-Type': 'text/plain;charset=UTF-8',
      'Origin': 'http://47.253.44.115:3001',
      'Referer': 'http://47.253.44.115:3001/',
      'Sec-GPC': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    },
    data: data
  };
  axios.request(config)
    .then((response) => {
      res.send("" + JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send("error: " + error);
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})