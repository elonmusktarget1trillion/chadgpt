
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
 const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://text-generation-chatgpt.p.rapidapi.com/Chat',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ede3c5163fmsh01abdacf07fd2b0p1c0e4bjsn1db1b15be576',
    'X-RapidAPI-Host': 'text-generation-chatgpt.p.rapidapi.com'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: 'who are you'
      }
    ],
    max_tokens: 2500
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
