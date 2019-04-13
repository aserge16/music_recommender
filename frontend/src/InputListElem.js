import React, { Component } from 'react';
import './style.css';
import {Button} from 'reactstrap';

class InputListElem extends Component{
	render() {
		return(
			<div className="row">
				<div className="col-10">
					{this.props.elem.name}
				</div>
				
				<Button className="col-2">x</Button>
			</div>
		);
	}
}

export default InputListElem;