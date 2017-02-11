import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import '../styles/TopicNav.css';

var TopicNav = React.createClass({
  render() {
    return(
		<div className="TopicNav">
			<Row>
				<Col xs={12}>
					<div className='TopicContainer'>
						<Link className='topic' to='/'>Home</Link>
						<Link className='topic' to='/editors'>Editor's pick</Link>
						<Link className='topic' to='/news'>News</Link>
						<Link className='topic' to='/technology'>technology</Link>
					</div>
				</Col>
			</Row>
		</div>
    );
  }
});

export default TopicNav;
