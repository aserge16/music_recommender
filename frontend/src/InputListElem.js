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
				
				{/* <Button 
					className="col-2"
					onClick={() => this.props.removeInput(this.props.type, this.props.id)}
				> */}
				<i class="fas fa-times-circle" onClick={() => this.props.removeInput(this.props.type, this.props.id)}></i>
				{/* </Button> */}
			</div>
		);
	}
}

export default InputListElem;