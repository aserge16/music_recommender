import React, { Component } from 'react';
import { searchTracks, searchArtists } from './API_query_functions';

class AutoSuggestionBox extends Component{
    constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			timeoutID: 0
		};
	}

	updateSearchResults = (searchResults) => {
		clearTimeout(this.state.timeoutID);

		console.log(searchResults);
		this.setState({
			searchResults
		});
	}
	
	componentDidUpdate(prevProps) {
		if (this.props.query !== "" && this.props.query !== prevProps.query) {
			clearTimeout(this.state.timeoutID);

			// wait 0.3s after last query update before showing suggestion.
			this.setState({
				timeoutID: setTimeout(() => {
						if (this.props.type === "song") {
							searchTracks(this.props.query, this.props.token, this.updateSearchResults);
						} else if (this.props.type === "artist") {
							searchArtists(this.props.query, this.props.token, this.updateSearchResults);
						}
					}, 300)
			})
		}
	}

    render() {
		return (
			<div>
				{/* <ul class="list-group">
					
				<li class="list-group-item">
					<img src='https://img.kpopmap.com/2018/10/izone-blood-type-sakura-cover.jpg'/>
				<p> Airplane - Minayawa Sakura </p>
					
				</li>
				<li class="list-group-item">Dapibus ac facilisis in</li>
				<li class="list-group-item">Morbi leo risus</li>
				<li class="list-group-item">Porta ac consectetur ac</li>
				<li class="list-group-item">Vestibulum at eros</li>
				</ul> */}
				<ul className="list-group">
					{
						this.state.searchResults.map((item) => {
							return (
								<li className="list-group-item">
									<img src={item.image_url}/>
									<p>{`${item.name} - ${item.artists.join(", ")}`}</p>
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