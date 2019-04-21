import React, { Component } from 'react';
import TrackPreview from './TrackPreview';
import './style.css';

class SongList extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row song-component">
				<h3>Recommended Songs</h3>
					{
						this.props.recommendedSongs.map((song) =>
							<div className="card--content" key={song.id}>
								<TrackPreview
									trackID={song.id}
									name={song.name}
								/>
							</div>
						)
					}
				</div>
			</div>
		);
	}
}

export default SongList;