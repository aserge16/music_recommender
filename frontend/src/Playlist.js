import React, { Component } from 'react';
import PlaylistView from './PlaylistView';

class Playlist extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row playlist-component">
					{
						this.props.playlists.map((playlist) => 
								<div className='playlist-box' key={playlist.id}>
									<PlaylistView
										playlistID={playlist.id}
									/>
									<p> {playlist.name} </p>
								</div>
						)
					}
				</div>
			</div>
		);
	}
}

export default Playlist;