import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

class ArtistView extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  hidden: true,
		};
		this.toggle = this.toggle.bind(this);
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
		
        // change the width and height as needed
		return(
			<div className='artist-box'>
				<p>{this.props.artist.name} </p>
				<img src={this.props.artist.images[0].url} alt='' onClick={this.toggle}/>
				<div classname='artist-card'>
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
				
				{/* <Card classname='artist-card' hidden={this.state.hidden}>
					<CardHeader>{this.props.artist.name}</CardHeader>
					<CardBody>
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
					</CardBody>
				</Card> */}
            </div>
		)
	}
}

export default ArtistView;