import axios from 'axios';

import database, { API_KEY, searchURI } from '../common/db.js';
import { GET_BOOKS_SUCCESS, GET_BOOKS_FAIL, GET_BOOKS_FETCH, GET_BOOK_SUGGESTS, GET_BOOK_SUGGEST_PREVIEW } from '../common/actionTypes';

function getBookIsSucceed(payload) {
    console.log('getBookIsSucceed', payload);
    return {
        type: GET_BOOKS_SUCCESS,
        payload,
    };
}

function getBookIsFailed(error) {
    return {
        type: GET_BOOKS_FAIL,
        payload: error,
    };
}

function getBookIsFetching() {
    return {
        type: GET_BOOKS_FETCH,
    };
}

export default function getBooks() {
    // const promise = database.ref('${shelfName}').once();
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(database.getBooks()), 800);
    });
    return (dispatch) => {
        dispatch(getBookIsFetching());
        return promise
                .then(
                    books => dispatch(getBookIsSucceed(books)),
                    e => dispatch(getBookIsFailed(e))
                 );
    };
}

export function getBookSuggests(title) {
    return {
        type: GET_BOOK_SUGGESTS,
        payload: axios.get(`${searchURI}?key=${API_KEY}&q=${title}`),
    };
}

export function getBookSuggestPreview(id) {
    return {
        type: GET_BOOK_SUGGEST_PREVIEW,
        payload: axios.get(`${searchURI}/${id}?key=${API_KEY}`),
    };
}

