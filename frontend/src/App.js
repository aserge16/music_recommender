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
				songs: [],
				artists: [],
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
				genres: []
			},
			recommendations: {songs: []}
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

	emptyRecommendations = () => {
		var newState = this.state;
		newState.recommendations.songs = [];
		this.setState(newState);
	}

	addRecommendation = (type, input) => {
		var newState = this.state;
		newState.recommendations[type].push(input);
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
					emptyRecommendations = {this.emptyRecommendations}
					addRecommendation = {this.addRecommendation}
					inputs={this.state.inputs}
				/>
				<div className='not-search'>
					<div className="row new-row align-items justify-content"> 
						<div className="col-9">
							{/* song */}
							<SongList recommendedSongs={this.state.recommendations.songs}/>
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
							songs={this.state.inputs.songs}
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
