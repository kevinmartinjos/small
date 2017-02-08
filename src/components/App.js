import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import TopicNav from './TopicNav';

class App extends Component {
  render() {
    return( 
    <div className="App">
      <div className="App__wrap">
        <Header>
          <TopicNav />
        </Header>
        <div className="App_content">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
