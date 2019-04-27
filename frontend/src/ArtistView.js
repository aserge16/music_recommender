import React, { Component } from 'react';

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

	render() {
		return(
			<div className='artist-box'>
				<p>{this.props.artist.name} </p>
				{
					this.props.artist.images.length === 0
					? <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'} alt='' onClick={this.toggle}/>
					: <img src={this.props.artist.images[0].url} alt='' onClick={this.toggle}/>
				}
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
			</div>
		)
	}
}

export default ArtistView;