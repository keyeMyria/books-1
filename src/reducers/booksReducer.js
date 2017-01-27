import { COMPLETE_BOOK, ADD_BOOK } from '../actions';

const initState = {
    list: [
        {
            id: 0,
            title: 'Harry Potter',
            started: true,
        },
        {
            id: 1,
            title: 'Bible',
            started: true,
        },
        {
            id: 2,
            title: 'The Stories of the Meekhan Marches. North – South',
            started: true,
        },
    ],
    activeBook: null,
};

export default function (state = initState, action) {
    switch (action.type) {
    case COMPLETE_BOOK: {
        const newState = { list: [...state.list], activeBook: state.activeBook };

        const item = newState.list[action.payload];
        item.active = !item.active;
        newState.list[action.payload] = item;
        return newState;
    }
    case ADD_BOOK: {
        action.payload.id = state.list.length;
        const newState = { list: [...state.list, action.payload], activeBook: state.activeBook };
        return newState;
    }
    default: {
        return state;
    }
    }
}
