import React, { Component } from 'react';
import { 
    InputGroup,
	InputGroupButtonDropdown,
	Input,
	Button,
	DropdownToggle,
	DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import './style.css';

import AutoSuggestionBox from './AutoSuggestionBox';
import { searchTracks, getRecommendations, getRelatedArtists} from './API_query_functions';


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
		  currentType: 'songs',
		};
	}
	
	toggleDropDown() {
	this.setState({
		dropdownOpen: !this.state.dropdownOpen
	});
	}

	typeToSong = () => {
		this.setState({
			currentType: 'songs'
		})
	}

	typeToArtist = () => {
		this.setState({
			currentType: 'artists'
		})
	}

	typeToGenre = () => {
		this.setState({
			currentType: 'genres'
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

	allRecomendations = (inputs, token) => {
		this.props.emptyRecommendations();

		getRecommendations(inputs, token, (result) => {
			for (var i = 0; i < result.length; i++) {
				this.props.addRecommendation('songs', result[i])
			}
		});

		var ids = inputs.artists.map((artist) => artist.id);
		getRelatedArtists(ids, token, (result) => {
			for (var i = 0; i < result.length; i++) {
				this.props.addRecommendation('artists', result[i])
			}
		});
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

					<Button style={{marginLeft: 10,}} onClick={() => this.allRecomendations(this.props.inputs, this.props.token)}>
						Get
					</Button>

				</div>
				<div className='search-col'>
					<div className="auto-suggest">
						<AutoSuggestionBox
							query={this.state.query}
							type={this.state.currentType}
							token={this.props.token}
							addInput={this.props.addInput}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchBox;