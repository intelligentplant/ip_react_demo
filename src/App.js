import React, { Component } from 'react';
import './css/App.scss';
import AppRouter from './AppRouter'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter/>
      </div>
    );
  }
}

export default App;
