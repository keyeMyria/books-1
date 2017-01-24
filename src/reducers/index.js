import { combineReducers } from 'redux';
import BooksReducer from './booksReducer';

export default combineReducers({
    books: BooksReducer
});
