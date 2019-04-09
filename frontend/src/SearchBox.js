import React, { Component } from 'react';
import { InputGroup,
	InputGroupAddon,
	InputGroupButtonDropdown,
	InputGroupDropdown,
	Input,
	Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';
import './style.css';

class SearchBox extends Component{
	constructor(props) {
		super(props);
		this.addSong = this.addSong.bind(this);
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.state = {
		  songs: [],
		  artists: [],
		  genres: [],
		  dropdownOpen: false,
		  splitButtonOpen: false,
		};
	}
	
	toggleDropDown() {
	this.setState({
		dropdownOpen: !this.state.dropdownOpen
	});
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
			<div className="search-col">
				<InputGroup>
					<Input />
					<InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
						<DropdownToggle caret>
						Type
						</DropdownToggle>
						<DropdownMenu>
						<DropdownItem>Song</DropdownItem>
						<DropdownItem>Artist</DropdownItem>
						<DropdownItem>Genre</DropdownItem>
						</DropdownMenu>
					</InputGroupButtonDropdown>
				</InputGroup>
			</div>

			// <div class='row'>
			// 	<div class="search-col">
			// 		<div class="search-box">
			// 			<input type="text" id="search" placeholder="Add songs to checklist" class="search-txt"/>
			// 			<a class="search-btn" href='#' 
			// 			onClick={() => this.addSong(document.getElementById('search'))}>
			// 				<i class="fas fa-search"></i>
			// 			</a>
			// 		</div>
			// 	</div>
			// 	<div class="column check-col">
			// 		<ol id="checkBox">Checklist: </ol> 
			// 		{this.state.songs.map((song) => 
			// 			<p> {song}</p>)
			// 		}
			// 	</div>
			// </div>
		)
	}
}

export default SearchBox;