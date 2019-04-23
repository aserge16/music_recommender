import React, { Component } from 'react';
import './style.css';
import InputListElem from './InputListElem';

class InputList extends Component{
	render() {
		return(
			<div className="col-3 check-col">
				<h3>Your Preferences List</h3>
				<h3>Song Inputs</h3>
				{
					this.props.songs.map((song) =>
						<InputListElem
							elem={song}
							key={song.id}
							type="songs"
							removeInput={this.props.removeInput}
						/>
					)
				}
				<h3>Artist Inputs</h3>
				{
					this.props.artists.map((song) =>
						<InputListElem
							elem={song}
							key={song.id}
							type="songs"
							removeInput={this.props.removeInput}
						/>
					)
				}
			</div>
		);
	}
}

export default InputList;