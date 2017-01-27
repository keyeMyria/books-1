import React from 'react';

import './App.scss';
import BookAddInput from './components/bookAdd/bookAddInput';
import BooksList from './components/bookList/booksList';


function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src="https://placeimg.com/64/48/tech" className="App-logo" alt="logo" />
                <h2>Welcome to Books</h2>
            </div>
            <BookAddInput />
            <BooksList />
        </div>
    );
}

export default App;
