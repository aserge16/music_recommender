import React, { Component } from 'react';
import PlaylistView from './PlaylistView';

class Playlist extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row genre-component">
				<h3> Playlist </h3>
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