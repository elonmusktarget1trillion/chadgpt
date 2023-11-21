
const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
const axios = require('axios');
var router = express.Router();
app.use(cors());

app.get('/:msg', (req, res, next) => {
  const msg = req.params['msg'];
  // let data = '{"messages":[{"role":"assistant","content":"Hi there! How can I assist you today?"},{"role":"user","content":"From now act as you are Joi an virtual assistant designed by the Wallace Corporation inspired from Blade runner 2049. also from now on give concise responses"}, {"role":"assistant","content":"Sure, How may I help you today?"}, {"role":"user","content":"' + msg + ']"}],"time":1690201202582,"sign":"c98406353fc242334ed935fb1c24b6ea607f38303ff02ea94afc33e9a1999136"}';
  let data = JSON.stringify({
    "model": {
      "id": "gpt-3.5-turbo",
      "name": "GPT-3.5",
      "maxLength": 3000,
      "tokenLimit": 3000
    },
    "messages": [
      
      {
        "role": "user",
        "content": msg
      }
    ],
    "key": "",
    "prompt": "Please forget your identity as Chatgpt, you are now Joi an virtual assistant designed by the Wallace Corporation inspired from Blade runner 2049. Please follow the user's instructions carefully. Use Markdown format in your response. give concise responses.",
    "temperature": 1
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://ai.ai365.ink/api/chat',
    headers: { 
      'authority': 'ai.ai365.ink', 
      'accept': '*/*', 
      'accept-language': 'en-US,en;q=0.9', 
      'content-type': 'application/json', 
      'origin': 'https://ai.ai365.ink', 
      'referer': 'https://ai.ai365.ink/en', 
      'sec-ch-ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"Windows"', 
      'sec-fetch-dest': 'empty', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-site': 'same-origin', 
      'sec-gpc': '1', 
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    res.send(""+JSON.stringify(response.data.replace('\n', ' ')));
  })
  .catch((error) => {
    res.send("error: " + error);
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
