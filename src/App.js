import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

import './App.scss';
import BookAddInput from './components/bookAdd/bookAddInput';
import BooksList from './components/bookList/booksList';

function App() {
    return (
        <div className="App">
            <AppBar title="Welcome to Books" rightIcon="book" />
            <BookAddInput />
            <BooksList />
        </div>
    );
}

export default App;
