import React, { Component } from 'react';

class ArtistView extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  hidden: false,
		  show: false,
		};
		this.toggle = this.toggle.bind(this);
		this.handleClick = ({ target }) => {
			this.setState(s => ({ target, show: !s.show }));
		  };
	}

	toggle = () => {
		this.setState({ hidden: !this.state.hidden} )
		console.log(this.props.artist)
	}
	
	hideDiv = () => {
		var hideMe = document.getElementsByClassName('artist-card');
		document.onclick = function(e){
			if(e.target.className !== 'artist-box'){
				hideMe.style.display = 'none';
			}
		}
	}

	render() {
		return(
			<div>
				<iframe 
					hidden={this.state.hidden}
					src={`https://open.spotify.com/embed/artist/${this.props.artist.id}`}
					title={this.props.artist.name}
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

export default ArtistView;