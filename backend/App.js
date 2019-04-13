const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');
var CLIENT_ID = "7cc2582a05fa493f8ae45727393829fe";
var SECRET_TOKEN = "ee5dab7ff4ac48a288d22017b558e9ae";

var encoded_token = Buffer.from(CLIENT_ID + ":" + SECRET_TOKEN)
    .toString('base64');    // encode to base64

const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/*
 * Handle POST request for access token
 */
app.get('/access-token', (req, res) => {
    getAccessToken().then((token) => res.send(token))
})


/*
 * Define access token request function
 */
const getAccessToken = async () => {
    try {
        response = await axios.post("https://accounts.spotify.com/api/token",
            "grant_type=client_credentials", {
                headers: {
                    Authorization: "Basic " + encoded_token,
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });
            token = response.data.token;
        return token;
    } catch (error) {
        console.error(error);
    }
}


app.listen(port,  () => console.log(`Example app listening on port ${port}!`))
