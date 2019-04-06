import React, { Component } from 'react';
import './style.css';
import Header from './Header.js';
import SearchBox from './SearchBox.js';
import SongList from './SongList.js';

class App extends Component {
	constructor(props) {
		super(props);
		//this.addSong = this.addSong.bind(this);
		this.state = {
		  songs: [],
		  artists: [],
		  genres: [],
		};
	}	


	render() {
		return (
			<div class="container-fluid testimonial-group"> 
				<Header/>
				<div className="row">
					<div className="col">
						{/* search box */}
						<SearchBox/>
						
						{/* song */}
						<SongList/>
						
						{/* artist */}
						<div class="row artist-component">Artists</div>

						{/* genre */}
						<div class="row genre-component">Genre</div>
					</div>
					<div className="col-3 check-col">
						<ol id="checkBox">Input List: </ol> 
						{/* {this.state.songs.map((song) => 
							<p> {song}</p>)
						} */}
						asfasdasd
					</div>
				</div>
			</div>
		);
	}
	}

export default App;
