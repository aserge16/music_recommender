import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js'
import SongList from './SongList.js';
import InputList from './InputList.js';
import Artist from './Artist';
import Playlist from './Playlist.js';
import axios from 'axios';
import { getRecommendations } from './API_query_functions';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: '',
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
						image_url: 'https://i.scdn.co/image/33dfdb9ff14477706fdbc694deb52d0f011c84be' },
					{
						name: 'Soda',
						id: '5lbtm3klSJvcf4lgFhmNcC',
						artists: [ 'Azealia Banks' ],
						image_url: 'https://i.scdn.co/image/1f1fa79ebec2ba56c8a397e837573312517094f9' },
					{
						name: 'Loyal Royal',
						id: '6wAFDaYq7Htm56SaYOOAie',
						artists: [ 'Sabina Ddumba' ],
						image_url: 'https://i.scdn.co/image/5bece7fdded937e41e245cef0366d5fb473e5357' },
					{
						name: 'Immature Couture',
						id: '4IWKVBCOTuAPsUfHt7wtDd',
						artists: [ 'Poppy' ],
						image_url: 'https://i.scdn.co/image/120d03965bee92a6a70c2e3d52059b5dd1d24742' }
				],
				artists: [
					{
						name: 'Queen',
  						id: '1dfeR4HaWDbWqFHLkxsg1d',
						image_url: 'https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982' },
					{
						name: 'Beyoncé',
						id: '6vWDO969PvNqNYHIOW5v0m',
						image_url: 'https://i.scdn.co/image/673cd94546df0536954198867516fee18cee1605' },
					{
						name: 'Queen Naija',
						id: '3nViOFa3kZW8OMSNOzwr98',
						image_url:
						 'https://i.scdn.co/image/6402cfd535b9f7ac3a9e9f0b311039ef44d055ca' },
					{
						name: 'Queen Pen',
						id: '0VbIlorLz3I5SEtIsc5vAr',
						image_url: 'https://i.scdn.co/image/ff4eabfc6691a25a8b43782e80a0ba0781f09a68' },
					{
						name: 'Queen Latifah',
						id: '5m7wCUhYhBh7A3A3YMxrbt',
						image_url: 'https://i.scdn.co/image/8f0b1267ee4a84e260991c25d136ed4be13a8cbe' }
				],
				playlists: [
					{
						name: "New Year's Party Mix",
						id: "37i9dQZF1DX1TEroFz7Oja" },
					{
						name: "Dance Party",
						id: "37i9dQZF1DXaXB8fQg7xif" },
					{
						name: "Rock Party",
						id: "37i9dQZF1DX8FwnYE6PRvL" },
					{
						name: "Girls' Night",
						id: "37i9dQZF1DX0Uv9tZ47pWo" },
					{
						name: "Latin Party Anthems",
						id: "37i9dQZF1DWVcbzTgVpNRm" }
				],
				recommendedSongs: [

				],
				genres: [
					
				]
			},
		};
	}

	componentDidMount() {
		// TODO: Add a setInterval here so access token doesn't expire.
		axios.get("http://localhost:3001/access-token")
			.then((res) => {
				this.setState({
					token: res.data
				})
			})
	}

	// the "type" parameter specifies the type of input to be added.
	// "songs" for adding a new song and "artists" for adding a new artist
	addInput = (type, input) => {
		var newState = this.state;
		newState.inputs[type].push(input);
		this.setState(newState);
	}

	removeInput = (type, inputID) => {
		var newState = this.state;
		var inputIndex = newState.inputs[type].map((item) => item.id).indexOf(inputID)
		newState.inputs[type].splice(inputIndex, 1);
		this.setState(newState);
	}

	render() {
		return (
			<div>
				<Header/>
				{/* search box */}
				<SearchBox 
					token={this.state.token}
					addInput={this.addInput}
					inputs={this.state.inputs}
				/>
				<div className='not-search'>
					<div className="row new-row align-items justify-content"> 
						<div className="col-9">
							{/* song */}
							<SongList recommendedSongs={this.state.inputs.recommendedSongs}/>
							{/* artist */}
							{/* TODO: make a new component ArtistView. */}
							{/* <div className="row new-row artist-component">Artists</div> */}
							<Artist artists={this.state.inputs.artists}/>
							{/* genre */}
							{/* TODO: make a new component GenreView. */}
							<Playlist playlists={this.state.inputs.playlists}/>
						</div>
						{/* <div className="col"></div> */}
						<InputList 
							songs={this.state.inputs.recommendedSongs}
							artists={this.state.inputs.artists}
							genres={this.state.inputs.genres}
							removeInput={this.removeInput}
							playlists={this.state.inputs.playlists}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
