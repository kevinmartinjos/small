import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../styles/Header.css';

var Header = React.createClass({
  render() {
    return(
		<div className='Header'>
			<Row>
				<Col xs={2}>
					<img className='logo' src={'/small_logo_tiny.png'} alt='logo'/>
				</Col>
			</Row>
		{this.props.children}
		</div>
    );
  }
});

export default Header;
