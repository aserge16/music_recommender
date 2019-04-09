import React, { Component } from 'react';
import './style.css';
import {Button} from 'reactstrap';

class InputListElem extends Component{
	render() {
		return(
			<div>
				<p>{this.props.song.name}</p>
			</div>
		);
	}
}

export default InputListElem;