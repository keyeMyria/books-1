import React, { Component } from 'react';
import './App.css';

import BooksList from './components/booksList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://placeimg.com/64/48/tech" className="App-logo" alt="logo" />
          <h2>Welcome to Books</h2>
        </div>
        <BooksList />
      </div>
    );
  }
}

export default App;
