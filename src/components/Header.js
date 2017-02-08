import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
		<div>
    		<Row>
		    	<Col xs={3}>
		        	Logo
				</Col>
				<Col xs={3} xsOffset={6}>
					User login
				</Col>
			</Row>
		{this.props.children}
		</div>
    );
  }
}

export default Header;