import React, { Component } from 'react';
import TrackPreview from './TrackPreview';
import './style.css';

class SongList extends Component{
	render() {
		return (
			<div class="row song-component">
				{
					this.props.songs.map((song) => {
						return (
							<div class="card--content">
								<TrackPreview
									trackID={song.id}
								/>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default SongList;