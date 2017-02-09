import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router'
import '../styles/TopicNav.css';

var TopicNav = React.createClass({
  render() {
    return( 
    	<div className="TopicNav">
			<Row>
				<Col sm={12}>
					<Link className='topic' to='/editors'>Editor's pick</Link>
			        <Link className='topic' to='/news'>News</Link>
			        <Link className='topic' to='/technology'>technology</Link>
		        </Col>
		  	</Row>
	  	</div>
    );
  }
});

export default TopicNav;