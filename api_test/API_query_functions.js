var axios = require("axios");
var CLIENT_ID = "7cc2582a05fa493f8ae45727393829fe";
var SECRET_TOKEN = "ee5dab7ff4ac48a288d22017b558e9ae";

var encoded_token = Buffer.from(CLIENT_ID + ":" + SECRET_TOKEN)
    .toString('base64');    // encode to base64


// Get the access token
axios.post("https://accounts.spotify.com/api/token",
    "grant_type=client_credentials", {
        headers: {
            Authorization: "Basic " + encoded_token,
            "Content-Type": "application/x-www-form-urlencoded",
            "grant_type": "client_credentials"
        }
    }
).then(function (response) {
    // search for artists named "queen"
    access_token = response.data.access_token;

    axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: "Bearer " + access_token
        },
        params: {
            q: "queen",
            type: "artist"
        }
    }).then(function (res) {
        console.log(res.data.artists.items);
    }).catch(function (error) {
    console.log(error);
    })
}).catch(function(error) {
    console.log(error.response.data);
    console.log(error.response.status);
});
