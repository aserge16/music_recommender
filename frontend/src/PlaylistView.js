import React, { Component } from 'react';

class PlaylistView extends Component{
	render() {
		return(
			<div>
                <iframe 
                    src={`https://open.spotify.com/embed/playlist/${this.props.playlistID}`}
					title={this.props.playlistID}
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

export default PlaylistView;