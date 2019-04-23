import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
	CardTitle, CardText } from 'reactstrap';

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
    }

	render() {
        // change the width and height as needed
		return(
			<div className='artist-box'>
				<img src={this.props.artist.image_url} alt='' onClick={this.toggle}/>
				<Card classname='artist-card' hidden={this.state.hidden}>
					<CardHeader>{this.props.artist.name}</CardHeader>
					<CardBody>
					<iframe 
						src={`https://open.spotify.com/embed/artist/${this.props.artist.id}`}
						title={this.props.artist.name}
						width="240"
						height="240"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					/>
					</CardBody>
				</Card>
            </div>
		)
	}
}

export default ArtistView;