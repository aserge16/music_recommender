import React, { Component } from 'react';
import './style.css';
import {addCheckBox} from './Functions.js';

class SearchBox extends Component{
	
	
	render() {
		return(
			<div class='row'>
				<div class="column search-col">
					<div class="search-box">
						<input type="text" id="search" placeholder="Add songs to checklist" class="search-txt"/>
						<a class="search-btn" href='#' onClick={addCheckBox}>
							<i class="fas fa-search"></i>
						</a>
					</div>
				</div>
				<div class="column check-col">
				<ol id="checkBox">Checkbox:</ol> 
				</div>
			</div>
		)
	}
}

export default SearchBox;