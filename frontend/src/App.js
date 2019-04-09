import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js'
import TrackPreview from './TrackPreview';
import SongList from './SongList.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
				inputs: {
					songs: [
						{
							name: "song 1",
							id: "asdfasdfa",
							artist: "asdfasdf",
							imageURL: "asdfadsf"
						},
						{
							name: "song 1",
							id: "asdfasdfa",
							artist: "asdfasdf",
							imageURL: "asdfadsf"
						},
						{
							name: "song 1",
							id: "asdfasdfa",
							artist: "asdfasdf",
							imageURL: "asdfadsf"
						}
					],
					artists: [
						{
							name: "artist 1",
							id: "asdfasdfdsaf",
							imageURL: "sadfasdfadsf"
						}
					],
					genres: []
				},
			recommendations: {
				
			}
		};
	}

  render() {
    return (
		<div class="container-fluid"> 
			<Header/>
			
			{/* search box */}
			<SearchBox/>
			
			{/* song */}
			<div class="row song-component">
					<div class="card--content">a</div>
					<div class="card--content">b</div>
					<div class="card--content">c</div>
					<div class="card--content">d</div>
					<div class="card--content">e</div>
					<div class="card--content">f</div>
					<div class="card--content">g</div>
					<div class="card--content">h</div>
					<div class="card--content">i</div>
					<div class="card--content">j</div>
			</div>
			
			{/* artist */}
			<div class="row artist-component">Artists</div>

			{/* genre */}
			<div class="row genre-component">Genre</div>
			<TrackPreview trackID="75wpmGsb1ZYOmKjFHOOCAm" />
		</div>
    );
  }
}

export default App;
