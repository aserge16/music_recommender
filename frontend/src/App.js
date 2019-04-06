import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js'

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
