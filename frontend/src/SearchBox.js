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
		// this.addSong = this.addSong.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
		this.toggleDropDown = this.toggleDropDown.bind(this);
		this.typeToSong = this.typeToSong.bind(this);
		this.typeToArtist = this.typeToArtist.bind(this);
		this.typeToGenre = this.typeToGenre.bind(this);

		this.state = {
		  query: "",
		  dropdownOpen: false,
		  splitButtonOpen: false,
		  currentType: 'Song',
		};
	}
	
	toggleDropDown() {
	this.setState({
		dropdownOpen: !this.state.dropdownOpen
	});
	}

	typeToSong = () => {
		this.setState({
			currentType: 'Song'
		})
	}

	typeToArtist = () => {
		this.setState({
			currentType: 'Artist'
		})
	}

	typeToGenre = () => {
		this.setState({
			currentType: 'Genre'
		})
	}

	updateQuery = (event) => {
		this.setState({
			query: event.target.value
		});
	}

	render() {
		console.log(this.state.query);
		return (
			<div className="search-col">
				<InputGroup className="search-box">
					<Input onChange={this.updateQuery} />
					<InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
						<DropdownToggle caret>
						{this.state.currentType}
						</DropdownToggle>
						<DropdownMenu>
						<DropdownItem onClick={this.typeToSong}>Song</DropdownItem>
						<DropdownItem onClick={this.typeToArtist}>Artist</DropdownItem>
						<DropdownItem onClick={this.typeToGenre}>Genre</DropdownItem>
						</DropdownMenu>
					</InputGroupButtonDropdown>
				</InputGroup>

				<Button style={{marginLeft: 10,}} >
					Get
				</Button>
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