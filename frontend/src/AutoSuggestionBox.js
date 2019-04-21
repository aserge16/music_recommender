import React, { Component } from 'react';
import { searchTracks, searchArtists } from './API_query_functions';

class AutoSuggestionBox extends Component{
    constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			timeoutID: 0,
			hidden: true
		};
	}
	
	componentDidUpdate(prevProps) {
		if (prevProps.type != this.props.type) {
			this.setState({
				searchResults: []
			});
		}
		
		// start searching for auto-suggestion when user types in a search query
		// if (this.props.query !== "" && this.props.query !== prevProps.query) {
		if (this.props.query !== prevProps.query) {
			clearTimeout(this.state.timeoutID);

			// wait 0.3s after last query update before showing suggestion.
			this.setState({
				timeoutID: setTimeout(() => {
						if (this.props.type === "songs") {
							console.log(this.props.type)
							searchTracks(this.props.query, this.props.token, this.updateSearchResults);
						} else if (this.props.type === "artists") {
							searchArtists(this.props.query, this.props.token, this.updateSearchResults);
						}
                    }, 300),
                hidden: false
			})
		}
    }

    setHiddenTrue = () => {
        this.setState({ hidden: true} )
    }
    
    updateSearchResults = (searchResults) => {
		clearTimeout(this.state.timeoutID);

		console.log(searchResults);
		this.setState({
			searchResults
		});
	}

    render() {
		return (
			<div>
				<ul class="list-group" hidden={this.props.query === "" || this.state.hidden}>
					{
						this.state.searchResults.map((item) => {
							return (
								<li 
									class="list-group-item"
                                    key={item.id}
                                    onClick={(e) => {
                                        this.props.addInput(this.props.type, item)
										this.setState({ hidden: true} )
										this.setState({ searchResults: [] })
                                    }}
								>
									<img src={item.image_url} alt=""/>
									{ (this.props.type == "songs") ? (
										<p>{`${item.name} - ${item.artists.join(", ")}`}</p>
									) : (this.props.type == "artists") ? (
										<p>{item.name} </p>
									) : (<p></p>)
									}
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default AutoSuggestionBox;