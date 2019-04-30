import React, { Component } from 'react';
import './style.css';

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
				
				<i className="fas fa-times-circle" onClick={() => this.props.removeInput(this.props.type, this.props.id)}></i>
			</div>
		);
	}
}

export default InputListElem;