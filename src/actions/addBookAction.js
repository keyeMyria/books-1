import database from '../common/db.js';
import { ADD_BOOK_SUCCESS, ADD_BOOK_FAIL, ADD_BOOK_FETCH } from '../common/actionTypes';

function addBookIsSucceed(payload) {
    console.log('addBookIsSucceed', payload);
    return {
        type: ADD_BOOK_SUCCESS,
        payload,
    };
}

function addBookIsFailed(error) {
    return {
        type: ADD_BOOK_FAIL,
        payload: error,
    };
}

function addBookIsFetching() {
    return {
        type: ADD_BOOK_FETCH,
    };
}
export default function addBook(payload) {
    return (dispatch, getStore) => {
        const { shelf: { list } } = getStore();
        payload.id = list.length;
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(database.addBook(database.shelfName, payload)));
        });

        dispatch(addBookIsFetching());
        return promise
                .then(
                    () => dispatch(addBookIsSucceed(payload)),
                    e => dispatch(addBookIsFailed(e))
                 );
    };
}
