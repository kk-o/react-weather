// import React and styles 
import React, { Component } from 'react';
import './styles/App.css';

// import components
import Jacket from './components/jacket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jacket />
      </div>
    );
  }
}

export default App;
