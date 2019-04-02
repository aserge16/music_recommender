var axios = require("axios");
var CLIENT_ID = "7cc2582a05fa493f8ae45727393829fe";
var SECRET_TOKEN = "ee5dab7ff4ac48a288d22017b558e9ae";
var ACCESS_TOKEN = "";

var encoded_token = Buffer.from(CLIENT_ID + ":" + SECRET_TOKEN)
    .toString('base64');    // encode to base64



const getAccessToken = async () => {
    try {
        response = await axios.post("https://accounts.spotify.com/api/token",
            "grant_type=client_credentials", {
                headers: {
                    Authorization: "Basic " + encoded_token,
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });
        ACCESS_TOKEN = response.data.access_token;
        console.log(ACCESS_TOKEN);
        return ACCESS_TOKEN;
    } catch (error) {
        console.error(error);
    }
}


async function searchArtists(searchItem) {
    const ACCESS_TOKEN = await getAccessToken();
    try {
        axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: "Bearer " + ACCESS_TOKEN
            },
            params: {
                q: searchItem,
                type: "artist"
            }
        }).then(function (res) {
            console.log(res.data.artists.items);
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
    }
}


async function searchTracks(searchItem) {
    const ACCESS_TOKEN = await getAccessToken();
    try {
        axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: "Bearer " + ACCESS_TOKEN
            },
            params: {
                q: searchItem,
                type: "track"
            }
        }).then(function (res) {
            console.log(res.data.tracks.items);
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
    }
}


async function getRecommendations(seeds, callback) {
    const ACCESS_TOKEN = await getAccessToken();
    try {
        axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: "Bearer " + ACCESS_TOKEN
            },
            params: {
                seed_tracks: songs,
                seed_artists: artists,
                seed_genres: genres
            }
        }).then(function (res) {
            callback(res.data);
            console.log(res.data);
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
}

//searchArtists("queen")
//searchTracks("shotgun knees")
songs = '5xhFyuXigbt6RAJR7k2aDs,1TKYPzH66GwsqyJFKFkBHQ';
artists = '5xhFyuXigbt6RAJR7k2aDs';
getRecommendations(songs, artists, [], (res) => console.log(res));

