import React, { Component } from 'react';
import ArtistView from './ArtistView';
import './style.css';

class Artist extends Component{
	render() {
		return (
			<div className="live_scroll">
				<div className="row new-row artist-component">
					<h3>Artist</h3>
					{
						this.props.artists.map((artist) => 
							//return (
								<div className='artist-box' key={artist.id}>
									<ArtistView
										artistID={artist.id}
										name={artist.name}
									/>
									<img src={artist.image_url} alt=''/>
									<p> {artist.name} </p>
								</div>
							//);
						)
					}
				</div>
			</div>
		);
	}
}

export default Artist;