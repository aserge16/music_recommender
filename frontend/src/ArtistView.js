import React, { Component } from 'react';

class ArtistView extends Component{
	render() {
        // change the width and height as needed
		return(
			<div>
                <iframe 
                    src={`https://open.spotify.com/embed/artist/${this.props.artistID}`}
                    width="250"
                    height="250"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                />
            </div>
		)
	}
}

export default ArtistView;