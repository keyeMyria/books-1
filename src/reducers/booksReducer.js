import {
    COMPLETE_BOOK,

    GET_BOOKS_FETCH,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_FAIL,

    ADD_BOOK_FETCH,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL,

    GET_BOOK_SUGGESTS,
    GET_BOOK_SUGGEST_PREVIEW,
} from '../common/actionTypes';

const initState = {
    list: [],
    suggests: [],
    suggestPreview: '',

    activeBook: null,

    addIsSucceed: false,
    addIsFetching: false,
    addIsFailed: false,

    getIsSucceed: false,
    getIsFetching: false,
    getIsFailed: false,
};

function listReducer(list, action) {
    switch (action.type) {
    case GET_BOOKS_SUCCESS: {
        return action.payload;
    }
    case ADD_BOOK_SUCCESS: {
        return [action.payload, ...list];
    }
    case COMPLETE_BOOK: {
        const newList = [...list];
        const item = newList.find(e => e.id === action.payload);
        item.started = !item.started;
        return newList;
    }
    default: {
        return list;
    }
    }
}

function success(pfx) {
    return {
        [`${pfx}IsSucceed`]: true,
        [`${pfx}IsFetching`]: false,
        [`${pfx}IsFailed`]: false,
    };
}
function fetching(pfx) {
    return {
        [`${pfx}IsSucceed`]: false,
        [`${pfx}IsFetching`]: true,
        [`${pfx}IsFailed`]: false,
    };
}
function fail(pfx) {
    return {
        [`${pfx}IsSucceed`]: true,
        [`${pfx}IsFetching`]: false,
        [`${pfx}IsFailed`]: false,
    };
}
export default function (state = initState, action) {
    switch (action.type) {
    case `${GET_BOOK_SUGGEST_PREVIEW}_FULFILLED`: {
        return {
            ...state,
            suggestPreview: action.payload.data,
        };
    }
    case `${GET_BOOK_SUGGESTS}_FULFILLED`: {
        return {
            ...state,
            suggests: action.payload.data,
        };
    }
    case COMPLETE_BOOK: {
        return {
            ...state,
            list: listReducer(state.list, action),
        };
    }


    case GET_BOOKS_SUCCESS: {
        return { ...state, list: listReducer(state.list, action), ...success('get') };
    }
    case GET_BOOKS_FETCH: {
        return { ...state, ...fetching('get') };
    }
    case GET_BOOKS_FAIL: {
        return { ...state, ...fail('get') };
    }


    case ADD_BOOK_SUCCESS: {
        return { ...state, list: listReducer(state.list, action), ...success('add') };
    }
    case ADD_BOOK_FETCH: {
        return { ...state, ...fetching('add') };
    }
    case ADD_BOOK_FAIL: {
        return { ...state, ...fail('add') };
    }
    default: {
        return state;
    }
    }
}
