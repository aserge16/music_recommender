import React, { Component } from 'react';
import TrackPreview from './TrackPreview';
import './style.css';

class SongList extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row song-component">
					{
						this.props.songs.map((song) =>
							<div className="card--content" key={song.id}>
								<TrackPreview
									trackID={song.id}
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