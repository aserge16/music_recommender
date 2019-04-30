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
			// <div className='artist-box'>
			// 	<Button onClick={this.handleClick}>
			// 		{this.props.artist.name}
			// 	</Button>
			// 	{
			// 		this.props.artist.images.length === 0
			// 		? <img 
			// 			src={'https://previews.123rf.com/images/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg'} 
			// 			alt='' 
			// 			onClick={this.handleClick}/>
			// 		: <img src={this.props.artist.images[0].url} alt='' onClick={this.handleClick}/>
			// 	}
			// 	<div classname='artist-card'>
					
			// 		<Overlay
			// 			show={this.state.show}
			// 			target={this.state.target}
			// 			placement="bottom"
			// 			container={this}
			// 		>
			// 			<iframe 
			// 				hidden={this.state.hidden}
			// 				src={`https://open.spotify.com/embed/artist/${this.props.artist.id}`}
			// 				title={this.props.artist.name}
			// 				width="240"
			// 				height="240"
			// 				frameBorder="0"
			// 				allowtransparency="true"
			// 				allow="encrypted-media"
			// 			/>
			// 		</Overlay>
			// 	</div>
			// </div>
		)
	}
}

export default ArtistView;