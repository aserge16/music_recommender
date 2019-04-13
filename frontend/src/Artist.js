import React, { Component } from 'react';
import ArtistView from './ArtistView';
import './style.css';

class Artist extends Component{
	render() {
		return (
			<div class="live_scroll">
				<div class="row new-row song-component">
                        {
                            this.props.artists.map((artist) => {
                                return (
                                    <div class='artist-box'>
                                        <ArtistView
                                            artistID={artist.id}
                                        />
                                        <img src={artist.image_url}/>
                                        <p> {artist.name} </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
			// </div>
		);
	}
}

export default Artist;