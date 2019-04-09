import React, { Component } from 'react';
import TrackPreview from './TrackPreview';
import './style.css';

class SongList extends Component{
	render() {
		return (
			<div class="live_scroll">
				<div class="row new-row song-component">
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
			</div>
		);
	}
}

export default SongList;