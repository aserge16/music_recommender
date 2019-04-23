import React, { Component } from 'react';
import ArtistView from './ArtistView';
import './style.css';

class Artist extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row artist-component">
					<h3>Recommended Artists</h3>
					{
						this.props.artists.map((artist) => 
							<ArtistView
								key = {artist.id}
								artist = {artist}
							/>
						)
					}
				</div>
			</div>
		);
	}
}

export default Artist;