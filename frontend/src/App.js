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
						artist: ["asdfasdf"],
						imageURL: "asdfadsf"
					},
					{
						name: "song 1",
						id: "asdfasdfa",
						artist: ["asdfasdf"],
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

	// the "type" parameter specifies the type of input to be added.
	// "songs" for adding a new song and "artists" for adding a new artist
	addInput = (type, input) => {
		var newState = this.state;
		new.state.inputs[type].push(input);
		this.setState(newState);
	}

	// Call Spotify to get recommendations
	getRecommendations = () => {

	}

	render() {
		return (
			<div class="container-fluid"> 
				<Header/>
				
				{/* search box */}
				<SearchBox/>
				
				{/* song */}
				{/* TODO: make a new component SongView. */}
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
				{/* TODO: make a new component ArtistView. */}
				<div class="row artist-component">Artists</div>

				{/* genre */}
				{/* TODO: make a new component GenreView. */}
				<div class="row genre-component">Genre</div>

				<TrackPreview trackID="75wpmGsb1ZYOmKjFHOOCAm" />
			</div>
		);
	}
}

export default App;
