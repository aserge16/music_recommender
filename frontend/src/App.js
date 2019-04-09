import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js'
import TrackPreview from './TrackPreview';
import SongList from './SongList.js';
import InputList from './InputList.js';

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

	updateInputSongs = () => {

	}

	render() {
		return (
			<div>
				<Header/>
				{/* search box */}
				<SearchBox/>
				<div class="row"> 
					<div className="col">
						{/* song */}
						{/* TODO: make a new component SongView. */}
						<SongList/>
						
						{/* artist */}
						{/* TODO: make a new component ArtistView. */}
						<div class="row artist-component">Artists</div>

						{/* genre */}
						{/* TODO: make a new component GenreView. */}
						<div class="row genre-component">Genre</div>

						<TrackPreview trackID="75wpmGsb1ZYOmKjFHOOCAm" />
					</div>
					
					<InputList/>
				</div>
			</div>
		);
	}
}

export default App;
