import React, { Component } from 'react';
import './style.css';
import InputListElem from './InputListElem';

class InputList extends Component{
	render() {
		return(
			<div className="col-3 check-col">
				<h3>Your Preferences List</h3>
				<h4>Song Inputs</h4>
				{
					this.props.songs.map((song) =>
						<InputListElem
							elem={song}
							key={song.id}
							id={song.id}
							type="songs"
							removeInput={this.props.removeInput}
						/>
					)
				}
				<h4>Artist Inputs</h4>
				{
					this.props.artists.map((artist) =>
						<InputListElem
							elem={artist}
							key={artist.id}
							id={artist.id}
							type="artists"
							removeInput={this.props.removeInput}
						/>
					)
				}
			</div>
		);
	}
}

export default InputList;