import React, { Component } from 'react';
import './style.css';

class SearchBox extends Component{
	
	
	render() {
		return(
			<div class='row'>
				<div class="column search-box">search</div>
				<div class="column check-box">Checkbox</div>
			</div>
		)
	}
}

export default SearchBox;