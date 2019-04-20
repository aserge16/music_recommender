import React, { Component } from 'react';
import PlaylistView from './PlaylistView';

class Playlist extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row song-component">
				<h2> Playlist </h2>
					{
						this.props.playlists.map((playlist) => 
								<div className='genre-box' key={playlist.id}>
									<PlaylistView
										playlistID={playlist.id}
									/>
									{/* <p> {playlist.name} </p> */}
								</div>
						)
					}
				</div>
			</div>
		);
	}
}

export default Playlist;