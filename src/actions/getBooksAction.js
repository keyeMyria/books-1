import database from '../common/db.js';
import { GET_BOOKS_SUCCESS, GET_BOOKS_FAIL, GET_BOOKS_FETCH } from '../common/actionTypes';

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
        setTimeout(() => resolve(database.getBooks()), 2000);
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

