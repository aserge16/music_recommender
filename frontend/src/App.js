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
						name: 'Where Is My Mama At',
						id: '5zFQCsOcFOhPAHgig4W3bn',
						artists: [ 'Elliphant' ],
						image_url: 'https://i.scdn.co/image/debbeb4efebd8194d86ed350e66fb951e8556147' },
					{
						name: 'Television',
						id: '3Qd2hv3zY6EIx9J94d7thb',
						artists: [ 'Natalia Kills' ],
						image_url: 'https://i.scdn.co/image/f5f5033173863e65d59c2a8d0bac2facfe37a3f0' },
					{
						name: 'God from the Machine',
						id: '1jugG2ptzEPcLUxSbCiY4A',
						artists: [ 'Santigold' ],
						image_url: 'https://i.scdn.co/image/33dfdb9ff14477706fdbc694deb52d0f011c84be' }
				],
				artists: [
					{
						name: 'Queen',
  						id: '1dfeR4HaWDbWqFHLkxsg1d',
						image_url: 'https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982' },
					{
						name: 'Beyoncé',
						id: '6vWDO969PvNqNYHIOW5v0m',
						image_url: 'https://i.scdn.co/image/673cd94546df0536954198867516fee18cee1605' }
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
		newState.inputs[type].push(input);
		this.setState(newState);
	}

	// Call Spotify to get recommendations
	getRecommendations = () => {

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
