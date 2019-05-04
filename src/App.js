import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header';
import JobResults from './shared/components/JobResults/JobResults';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <JobResults />
        </div>
      </div>
    );
  }
}

export default App;
