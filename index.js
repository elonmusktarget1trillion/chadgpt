
const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
const axios = require('axios');
var router = express.Router();
app.use(cors());
const getRes = async (text) => {
    const promptText  = text;

    const prompt = encodeURI(promptText)
    console.log(prompt)

    var myHeaders = new Headers();
    myHeaders.append("authority", "bard.google.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.7");
    myHeaders.append("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    myHeaders.append("cookie", "SID=ewijKec2AoQknP2fz4gBw6GW4uZNm_p21Hi9LsKen-MWViMaGk350-y--_McWfuaHr3M5w.; __Secure-1PSID=ewijKec2AoQknP2fz4gBw6GW4uZNm_p21Hi9LsKen-MWViMa6luxB_KxgjDS6X30iCbstQ.; __Secure-3PSID=ewijKec2AoQknP2fz4gBw6GW4uZNm_p21Hi9LsKen-MWViManV1s0AJ-oweGmuK2Z0mv0Q.; HSID=AcKO1QGw4JFSQtxsg; SSID=AGPgFJSMfTDWjccEI; APISID=6LiRr8tuc-JU7cwx/AJtd63loTlEU4ISUO; SAPISID=mfZw1Z59t_d7QZoB/AFTHJxITaHmCw-yAe; __Secure-1PAPISID=mfZw1Z59t_d7QZoB/AFTHJxITaHmCw-yAe; __Secure-3PAPISID=mfZw1Z59t_d7QZoB/AFTHJxITaHmCw-yAe; 1P_JAR=2024-01-01-23; SEARCH_SAMESITE=CgQIi5oB; AEC=Ackid1RIm_n3oJoSls3Wr5o3KCe4ZwlqlI_umB2Aeku1O4H-K4EQai50pw; __Secure-ENID=16.SE=bn7d_mo9LEsdLDpGZ0axx8GnOMQgr1gpYSHtnM6nah5yjiCS3q20R3kuoowFudmkrHwBCT0gtvVnmboVpMxEXlaUx3RiVHK8uqBN3ZP8KaLa1erpoW9LHQHZAjFeNqQu7ufb4bCKX9toMzmeD-4_530ja-p8aZLbpQZZWY8rJTDrZ1pK7rl1HUgLf5nWL54RWPKBSrPdYZmfLHiFEFprAYh77UeYoIfJcfOgs8NoMYavW4x833AbjtTF5qB0lGFvA6BFuaHFA05iCrJs3w; NID=511=tyxTb6bCP5OQQfaCB6rfrXNvGdO6a_szMNTi40rSNgP4ZtarxGwohfa2NFtuO6Uz3nVQBD6IzhGKav5Ns07ftUnqv6c2JgeYRl7ioujZgdbTQyOKQaJvOmYKu4Cv8MjJCpu8VW70oLusPJ0xbrtDBU6tgNikniTN8PTzXm72BHzFkXNs1nhApchJBuWryScCxivd9QzV0yZXkS7nXA-TwiD0T51MIYN03Bio0PLlHOycN9LPUiR7SSrIYhAo-WGWO4RdjzMinW_0rg4RN0y_Tg; __Secure-1PSIDTS=sidts-CjEBPVxjSulBECTdkjzZglWntGaXd3ruEBo1cibJ0VVx1Hob7puIsotqeo9TcN5a2Jx3EAA; __Secure-3PSIDTS=sidts-CjEBPVxjSulBECTdkjzZglWntGaXd3ruEBo1cibJ0VVx1Hob7puIsotqeo9TcN5a2Jx3EAA; SIDCC=ABTWhQH3EbQQzGWKa9sfOyovvSFg9mqHQfQw_q2JMkdl7j4z0xWT-eZ5b4jzxfx89Y3erJNF0w; __Secure-1PSIDCC=ABTWhQG8RVhhZJxIn-oCPZxwFrgYE5rRZ1A4WuC1rfa55gCFg60ZVdNpShPKxbEP15C1RpcP; __Secure-3PSIDCC=ABTWhQFadYxPaKP8NEY7X2yQndhI78z-mzgezb2wRfs7QUsVlsD1loJaXj2rGi9mdkkb2AWX; SIDCC=ABTWhQHO4vYCU81ZTNossa0vN4MGU2_41hOXH-fKSWXkausdpxDsILyK9G0rI87gZoNINrKfdw; __Secure-1PSIDCC=ABTWhQGa7E6xTqQLA4UpEd9_enu-jgLsPD5N9lUsHp8eTYgf9OaGXo59kUaFBHYisjOpVDQ2; __Secure-3PSIDCC=ABTWhQHbksaYPNq2xeS4RSqH1v3krtcXLpn76sVPh8Lpz9B6-0LZubHjnbzriK2ub3oOh0Xf");
    myHeaders.append("origin", "https://bard.google.com");
    myHeaders.append("referer", "https://bard.google.com/");
    myHeaders.append("sec-ch-ua", "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Brave\";v=\"120\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-model", "\"\"");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-ch-ua-platform-version", "\"15.0.0\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-gpc", "1");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    myHeaders.append("x-same-domain", "1");

    var raw = `f.req=%5Bnull%2C%22%5B%5B%5C%22${prompt}%5C%22%2C0%2Cnull%2Cnull%2Cnull%2Cnull%2C0%5D%2C%5B%5C%22en%5C%22%5D%2C%5B%5C%22%5C%22%2C%5C%22%5C%22%2C%5C%22%5C%22%5D%2C%5C%22!HB-lH0fNAAYd8nJvPfJC1kiMRzfiLKY7ADQBEArZ1Hs0nge-jJ-ZPmrUqcHciMGMXIoYa8V4GoLQ4B4aMy96zGXnMo1wEFjH_UzT9YZwAgAAAnNSAAAAC2gBB5kDeZd8dWEsj0VPhNAxgkVkSKhlE6xCbb3ZOB6-BV5vC575F9skaTeStIRHY3eXE6eh9IOJLzmAh9iC3sWygUSguWc3i1jf0yq0paT_vO5-_VNW6-iUR4CIqwTZfRSTUrK1gnu2Zo3CKYMUWuJ9thINT_G8_KRemsO3PsAtub2OnpPl38KUu9tmDvt1OMPw8Tryys1k681gxQvq21FMkOphz6iAoSy7KaW8_WsCs9MQRE8VoeHRsQCXyKbVLFH-UXuDnFbuCoPIrsNu8KYNH-qG5wU820Cb-TMopHZDBGf1H8rCBxGxpTrypXq_ZYTqTniKI_z4gvQ1O61Z94cvr3Pg6LUjnHeTrlDolsOE8ohChu6ZVoetJ1gs3QmZlRa5GHHSlxuOfcD7PmkbExbrMeme0_7twLrywJLFOZdqbEsd-yBN5A7F6JDoTfuAe2NbJiBw8VqABVFArAq8njLX5v1JJPcwkQJcwfrMmzfw7LO_VmnPmR0N-AKTZuJcq2zRo4W3xV1qud10qwMQI1kc8lOKEx4WVTmTnil11Mpd7pFxTxBeMqFts0GZmEt4SvWPIdePUjpyHnoCiDTsr9HRU3VIGhPBSV47OoqYson5xAq1gK_AyNEe_gCEOneh8wlhCg69gjLyu_-NPwzHKw_YcjiRH-CXu_Km5cCn5O4dw1nflX9WnCih9DLsKpOE8_3trn5dLA7rc_oQ7Vc8VtaIpai2BmN60nhsg6WseqaqMGH3KEKCiC5al0wAM4xQ9H3zGkq9if3x7534GK-luOUt_ZsUMC9Y8-1T-7_AkEaB3Xs11RqcemLO0m8I-0wE2rA-acIkN8q1LXtNkDS7pi2YiQpwHeHfygzpm3e1TERbTvGwWTvzVXoRjPyp4gBRZLfA5ZW2XKTvGP9xUzIDGZF-GBndYiNuMTNvjxG9O8XEE92G64ZJ-za8q_hA8s4OjVehHgkDpDthbU8lSbaGmIZ0okMgcx9ClvbTqiUrTyQwNDyqRFExGxie9LZSF8FkrYTnfE168ZcdjdUE37zChOQSRAIkPkL0oLWjQ-xBRd2RZ4ZxIbcb4fFCED4F65luL8JpFwA1qzFQ-M7cQMuxAwsyvDc-Kuw6KGG9wh0V8pCAm6HdtO-Q7fw_d1FF2O_u6bvRdOryYO9IuSpmT5WxpKxaZs3PMVWHydXsix3Qe-c%5C%22%2C%5C%222fdd6373b523220697f7a63597588c37%5C%22%2Cnull%2C%5B1%5D%2C1%2Cnull%2Cnull%2C1%2C0%5D%22%5D&at=AOTFbH51aNB1oJOcx_Ynq0GWB99P%3A1704202474516&`
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const AIResponse = await fetch("https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?bl=boq_assistant-bard-web-server_20231219.07_p0&f.sid=927918652351474151&hl=en&_reqid=768676&rt=c", requestOptions)
        .then(async (response) => {
            let lines = (await response.text()).split("\n");
            console.log({ lines })
            let longest_line = lines.reduce(function (a, b) {
                return a.length > b.length ? a : b;
            }, "");
            let response1 = await JSON.parse(JSON.parse(longest_line)[0][2])[4][0][1][0];
            const processedResponse = response1.replaceAll(/\*/g, "").replaceAll("\n\n", "\n").replaceAll("  ", " ");
            console.log("Got this thing");
            console.log(processedResponse);
            return (processedResponse);
        })

        .catch(error => console.log('error', error));
    return AIResponse
};

app.get('/:msg', (req, res, next) => {
  const msg = req.params['msg'];
  // let data = '{"messages":[{"role":"assistant","content":"Hi there! How can I assist you today?"},{"role":"user","content":"From now act as you are Joi an virtual assistant designed by the Wallace Corporation inspired from Blade runner 2049. also from now on give concise responses"}, {"role":"assistant","content":"Sure, How may I help you today?"}, {"role":"user","content":"' + msg + ']"}],"time":1690201202582,"sign":"c98406353fc242334ed935fb1c24b6ea607f38303ff02ea94afc33e9a1999136"}';
  
  
  res.send(getRes(msg));
  

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
