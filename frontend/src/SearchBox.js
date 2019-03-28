import React, { Component } from 'react';
import './style.css';

class SearchBox extends Component{
	
	
	render() {
		return(
			<div class='row'>
				<div class="column search-col">
					<div class="search-box">
						<input type="text" name="search" placeholder="Add songs to checklist" class="search-txt"/>
						<a class="search-btn" href='#'>
							<i class="fas fa-search"></i>
						</a>
					</div>
				</div>
				<div class="column check-col">Checkbox</div>
			</div>
		)
	}
}

export default SearchBox;