import React, { Component } from 'react';
import './style.css';

class SearchBox extends Component{
	
	
	render() {
		return(
			<div class='row search-box'>
				<div class="col-md-8 pr-md-1">
					<form method='get' action=''>
						<div class='tb'>
							<div class='td'>
								<input type='text' placeholder='Search' required/>
							</div>
							<div class='td' id='s-cover'>
								<button type='submit'>
									<div id="s-circle"></div>
									<span></span>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div class="col-md-4 pl-md-2 check-box">Checkbox</div>
			</div>
		)
	}
}

export default SearchBox;