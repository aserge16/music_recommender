import React, { Component } from 'react';
import './style.css';
import InputListElem from './InputListElem';

class InputList extends Component{
	render() {
		return(
			<div className="col-3 check-col">
				<h3>Songs</h3>
				{
					this.props.songs.map((song) =>
					<InputListElem song={song}></InputListElem>)
				}
			</div>
		);
	}
}

export default InputList;