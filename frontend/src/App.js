import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js'
import SongList from './SongList.js';
import InputList from './InputList.js';
import Artist from './Artist';
import Playlist from './Playlist.js';
import axios from 'axios';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: '',
			inputs: {
				songs: [],
				artists: [],
				genres: []
			},
			recommendations: {
				songs: [],
				artists: [],
				playlists: []
			}
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
		newState.recommendations.artists = [];
		newState.recommendations.playlists = [];
		this.setState(newState);
	}

	addRecommendation = (type, input) => {
		var newState = this.state;
		newState.recommendations[type].push(input);
		this.setState(newState);
	}

	render() {
		return (
			<div className="body">
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
							{/* TODO: Change the color of this text */}
							{/* <h2>Recommended Songs</h2> */}
							<SongList recommendedSongs={this.state.recommendations.songs}/>

							{/* <h2>Recommended Artists</h2> */}
							<Artist artists={this.state.recommendations.artists}/>
							
							{/* genre */}
							<Playlist playlists={this.state.recommendations.playlists}/>
						</div>
						
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
