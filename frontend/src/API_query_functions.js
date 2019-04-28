var axios = require("axios");
var genres = require("./genre_seeds");


export async function searchArtists(searchItem, token, callback) {
    axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: "Bearer " + token
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
            if (item.images.length !== 0) {
                var artist = {name:item.name, id:item.id, image_url:item.images[0].url};
            } else {
                artist = {name:item.name, id:item.id, image_url:""}
            }
            artists[i] = artist;
        }
        callback(artists);
    }).catch(function (error) {
        console.log(error);
    })
}

export async function searchTracks(searchItem, token, callback) {
    axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: "Bearer " + token
        },
        params: {
            q: searchItem,
            type: "track",
            limit: 7
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
        callback(tracks);
    }).catch(function (error) {
        console.log(error);
    })
}

export async function searchGenres(searchItem, callback) {
    searchItem = searchItem.toLowerCase();
    var results = genres.genres.filter((genre) => genre.search(searchItem) !== -1)
    callback(results)
}


export async function getRecommendations(seed, token, callback) {
    var tracks = '';
    if (seed.songs !== undefined) {
        tracks = seed.songs.map((song) => song.id).join()
    }

    var artists = '';
    if (seed.artists !== undefined) {
        artists = seed.artists.map((artist) => artist.id).join()
    }

    if (seed.genres !== undefined) {
        genres = seed.genres.join()
    }

    try {
        axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: "Bearer " + token
            },
            params: {
                seed_tracks: tracks,
                seed_artists: artists,
                seed_genres: genres,
                limit: 15
            }
        }).then(function (res) {
            var tracks = [];
            for (var i = 0; i < res.data.tracks.length; i++) {
                var item = res.data.tracks[i];
                var artists = item.artists.map((artist) => artist.name)

                var track = {
                    name: item.name, 
                    id: item.id, 
                    artists: artists, 
                    image_url: item.album.images[0].url
                };
                tracks.push(track);
            }
            callback(tracks);
        })
    } catch (error) {
        console.log(error);
    }
}

export async function getRelatedArtists(artists, token, callback) {
    // Given a list of artists id, find all their related artists and combine them
    // into a single list. Then sort the list by the artist's popularity
    // and return the first 15 results.
    var allRequests = artists.map((id) => {
        return axios.get(`https://api.spotify.com/v1/artists/${id}/related-artists`,
            {
                headers: {
                Authorization: "Bearer " + token
                }
            }
    )});

    axios.all(allRequests).then(function (res) {
        // combine results, merge into a single list
        var allRelatedArtists = res.map(result => result.data.artists)
        allRelatedArtists = allRelatedArtists.flat(1)

        // sort the list based on popularity, take first 15 results
        allRelatedArtists.sort((a, b) => b.popularity - a.popularity)
        var toReturn = allRelatedArtists.slice(0, 15)
        callback(toReturn)
        
    }).catch(function (error) {
        console.log(error);
    })
}


export async function getCategory(categories, token, callback) {
    var allRequests = categories.map((category) => {
        return axios.get(`https://api.spotify.com/v1/browse/categories/${category}/playlists`,
            {
                headers: {
                Authorization: "Bearer " + token
                }
            }
    )});

    axios.all(allRequests).then(function (res) {
        var allPlaylists = res.map(result => result.data.playlists.items)
        allPlaylists = allPlaylists.flat(1)
        callback(allPlaylists)
    }).catch(function (error) {
        console.log(error);
    })
}
