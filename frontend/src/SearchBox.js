import React, { Component } from 'react';
import { InputGroup,
	InputGroupButtonDropdown,
	Input,
	Button,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';
import './style.css';
import AutoSuggestionBox from './AutoSuggestionBox';

import { searchTracks } from './API_query_functions';

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
		  searchResults: [],
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

	updateSearchResults = () => {
        searchTracks(this.state.query, (results) => {
            console.log(results)
        })
    }

	render() {
		return (
			<div>
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
				<div className='search-col'>
					<div className="auto-suggest">
						<AutoSuggestionBox
							query={this.state.query}
							type={"songs"}
							token={this.props.token}
							addInput={this.props.addInput}
						/>
					</div>
				</div>
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