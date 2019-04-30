import React, { Component } from 'react';
import ArtistView from './ArtistView';
import './style.css';

class Artist extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row artist-component">
					<h3>Recommended Artists</h3> 
						{/* {
							this.props.artists.map((artist) =>
							<div className='artist-box'> 
								<p>{artist.name} </p>
								<img 
									src={artist.images[0].url}
								/>
							</div>
							)
						} */}
						
						{
							this.props.artists.map((artist) => 
								<div className='card--content'>
									<h5>{artist.name}</h5>
									<ArtistView
										key = {artist.id}
										artist = {artist}
									/>
								</div>
							)
						}
				</div>
			</div>
		);
	}
}

export default Artist;