import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './style.css';
import {addCheckBox} from './Functions.js';



class SearchBox extends Component{
	constructor(props) {
		super(props);
		this.addSong = this.addSong.bind(this);
		this.state = {
		  songs: [],
		  artists: [],
		  genres: [],
		};
	}

	addSong = (song) => {
		this.setState({
			songs: this.state.songs.concat(song.value)
		})
		song.value = ""
		console.log(this.state.songs)
	}

	render() {
		return(
			<div class='row'>
				<div class="column search-col">
					<div class="search-box">
						<input type="text" id="search" placeholder="Add songs to checklist" class="search-txt"/>
						<a class="search-btn" href='#' 
						onClick={() => this.addSong(document.getElementById('search'))}>
							<i class="fas fa-search"></i>
						</a>
					</div>
				</div>
				<div class="column check-col">
					<ol id="checkBox">Checklist: </ol> 
					{this.state.songs.map((song) => 
						<p>{song}</p>)
					}
				</div>
			</div>
		)
	}
}

export default SearchBox;