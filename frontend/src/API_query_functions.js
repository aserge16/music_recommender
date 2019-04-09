var axios = require("axios");
var CLIENT_ID = "7cc2582a05fa493f8ae45727393829fe";
var SECRET_TOKEN = "ee5dab7ff4ac48a288d22017b558e9ae";

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
                type: "artist",
                limit: 15
            }
        }).then(function (res) {
            var artists = [];
            for (var i = 0; i < res.data.artists.items.length; i++) {
                var item = res.data.artists.items[i];
                var artist = {name:item.name, id:item.id, image_url:item.images[0].url};
                artists[i] = artist;
            }
            return artists;
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
                type: "track",
                limit: 15
            }
        }).then(function (res) {
            var tracks = [];
            for (var i = 0; i < res.data.tracks.items.length; i++) {
                var item = res.data.tracks.items[i];
                var artists = [];
                for (var j = 0; j < item.artists.length; j++) {
                    artists[j] = item.artists[j].name;
                }
                var track = {name:item.name, id:item.id, artists:artists, image_url:item.album.images[0].url};
                tracks[i] = track;
            }
            return tracks;
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
    }
}


async function getRecommendations(seed) {
    const ACCESS_TOKEN = await getAccessToken();
    try {
        axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: "Bearer " + ACCESS_TOKEN
            },
            params: {
                seed_tracks: seed.songs,
                seed_artists: seed.artists,
                seed_genres: seed.genres,
                limit: 15
            }
        }).then(function (res) {
            var tracks = [];
            for (var i = 0; i < res.data.tracks.length; i++) {
                var item = res.data.tracks[i];
                var artists = [];
                for (var j = 0; j < item.artists.length; j++) {
                    artists[j] = item.artists[j].name;
                }
                var track = {name:item.name, id:item.id, artists:artists, image_url:item.album.images[0].url};
                tracks[i] = track;
            }
            return tracks;
        }).catch(function (error) {
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
}


function getArtistWiki(name, callback) {
    axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exintro: "",
            explaintext: "",
            redirects: 1,
            titles: name,
        }
    }).then(function (res) {
        var result = res.data.query.pages;
        callback(result[Object.keys(result)[0]].extract)
    }).catch(function(error) {
        console.log(error);
    })
}


//searchArtists("queen")
//searchTracks("shotgun knees")
songs = '5xhFyuXigbt6RAJR7k2aDs,1TKYPzH66GwsqyJFKFkBHQ';
artists = '5xhFyuXigbt6RAJR7k2aDs';
genres = "";
seed = {songs:songs, artists:artists, genres:genres};
getRecommendations(seed)
