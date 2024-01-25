
const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
const axios = require('axios');
var router = express.Router();
const fetch = require("node-fetch");
app.use(cors());
app.get('/:msg', async (req, res, next) => {
  const msg = req.params['msg'];
  // let data = '{"messages":[{"role":"assistant","content":"Hi there! How can I assist you today?"},{"role":"user","content":"From now act as you are Joi an virtual assistant designed by the Wallace Corporation inspired from Blade runner 2049. also from now on give concise responses"}, {"role":"assistant","content":"Sure, How may I help you today?"}, {"role":"user","content":"' + msg + ']"}],"time":1690201202582,"sign":"c98406353fc242334ed935fb1c24b6ea607f38303ff02ea94afc33e9a1999136"}';
const options = {
  method: 'POST',
  url: 'https://chatgpt-gpt5.p.rapidapi.com/ask',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'aed7821064mshd2b61cc8cf343b1p1bf5a2jsn79c55d3b28cc',
    'X-RapidAPI-Host': 'chatgpt-gpt5.p.rapidapi.com'
  },
  data: {
    query: msg
  }
};

try {
	const response = await axios.request(options);
	res.send(response.data.response);
} catch (error) {
	res.send(error);
}
  
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
