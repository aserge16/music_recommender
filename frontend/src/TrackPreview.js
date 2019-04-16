import React, { Component } from 'react';

class TrackPreview extends Component{
	render() {
        // change the width and height as needed
		return(
			<div>
                <iframe 
                    src={`https://open.spotify.com/embed/track/${this.props.trackID}`}
					title={this.props.name}
					width="240"
                    height="240"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                />
            </div>
		)
	}
}

export default TrackPreview;