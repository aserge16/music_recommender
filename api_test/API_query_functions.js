const axios = require('axios')

const getAccessToken = async () => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic N2NjMjU4MmEwNWZhNDkzZjhhZTQ1NzI3MzkzODI5ZmU6ZWU1ZGFiN2ZmNGFjNDhhMjg4ZDIyMDE3YjU1OGU5YWU=' 
    }
    try {
        return await axios.post('https://accounts.spotify.com/api/token',
            'grant_type': 'client_credentials',
            'Authorization': 'Basic N2NjMjU4MmEwNWZhNDkzZjhhZTQ1NzI3MzkzODI5ZmU6ZWU1ZGFiN2ZmNGFjNDhhMjg4ZDIyMDE3YjU1OGU5YWU=')
    } catch (error) {
        console.error(error)
    }
}

const reportToken = async () => {
    const accessToken = await getAccessToken()

    if (accessToken) {
        console.log(`Your token is ${accessToken}`)
    }
}

reportToken()
