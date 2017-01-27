export const COMPLETE_BOOK = 'COMPLETE_BOOK';
export const ADD_BOOK = 'ADD_BOOK';

export function completeBook(payload) {
    return {
        type: COMPLETE_BOOK,
        payload,
    };
}

export function addBook(payload) {
    return {
        type: ADD_BOOK,
        payload,
    };
}
