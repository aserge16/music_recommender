import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js'

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
	<div>
		<head>
			<title>Music Recommendation using Spotify API</title>
			<link rel="stylesheet" type="text/css" href="style.css"/>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		</head>
		
		<body>
			<div class="container-fluid"> 
				<Header/>
				
				{/* search box */}
				<SearchBox/>
				
				{/* song */}
				<div class="row song-component">Songs</div>
				
				{/* artist */}
				<div class="row artist-component">Artists</div>

				{/* genre */}
				<div class="row genre-component">Genre</div>
			</div>
		</body>
	</div>
    );
  }
}

export default App;
