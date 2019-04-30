import React, { Component } from 'react';
import './style.css';
import {Button} from 'reactstrap';

class InputListElem extends Component{
	render() {
		return(
			<div className="row">
				<div className="col-10">
					{ this.props.type === "songs" ? <p>{this.props.elem.name + "  -  " + this.props.elem.artists}</p>
						: this.props.type === "artists" ?  <p>{this.props.elem.name}</p>
						: <p>{this.props.elem}</p>
					}
				</div>
				
				<Button 
					className="col-2"
					onClick={() => this.props.removeInput(this.props.type, this.props.id)}
				>
					{/* TODO: use some library to get a cross icon, don't just use "x" */}
					x
				</Button>
			</div>
		);
	}
}

export default InputListElem;