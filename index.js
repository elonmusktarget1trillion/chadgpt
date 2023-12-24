
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
  const FormData = require('form-data');
let data = new FormData();
data.append('_wpnonce', 'b33cc009c9');
data.append('post_id', '2');
data.append('url', 'https://chat.chatgptdemo.ai');
data.append('action', 'wpaicg_chat_shortcode_message');
data.append('message', 'hello\r\n');
data.append('bot_id', '0');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://chat.chatgptdemo.ai/wp-admin/admin-ajax.php',
  headers: { 
    'authority': 'chat.chatgptdemo.ai', 
    'accept': '*/*', 
    'accept-language': 'en-US,en;q=0.6', 
    'origin': 'https://chat.chatgptdemo.ai', 
    'referer': 'https://chat.chatgptdemo.ai/', 
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-origin', 
    'sec-gpc': '1', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 
    'Cookie': '97445bcfa327db46014ef9d22d9e9624=a%3A2%3A%7Bi%3A0%3Bs%3A17%3A%22Human%3A%20hello%0AAI%3A%20%22%3Bi%3A1%3Bs%3A34%3A%22Hello%21%20How%20can%20I%20assist%20you%20today%3F%22%3B%7D; wpaicg_chat_client_id=t_9189e58ad2b1def3d0b609f9ea1045; wpaicg_conversation_url_shortcode=97445bcfa327db46014ef9d22d9e9624', 
    ...data.getHeaders()
  },
  data : data
};

  axios.request(config)
  .then((response) => {
    res.send(""+JSON.stringify(response.data.data.replace('\n', ' ')));
  })
  .catch((error) => {
    res.send("error: " + error);
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
