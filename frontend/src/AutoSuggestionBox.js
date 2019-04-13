import React, { Component } from 'react';

class AutoSuggestionBox extends Component{
    constructor(props) {
        super(props);
    }

    render() {
		return (
			<div>
				<ul class="list-group">
				<li class="list-group-item">
					<img src='https://img.kpopmap.com/2018/10/izone-blood-type-sakura-cover.jpg'/>
				<p> Airplane - Minayawa Sakura </p>
					
				</li>
				<li class="list-group-item">Dapibus ac facilisis in</li>
				<li class="list-group-item">Morbi leo risus</li>
				<li class="list-group-item">Porta ac consectetur ac</li>
				<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
		);
	}
}

export default AutoSuggestionBox;