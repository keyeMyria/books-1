import { COMPLETE_BOOK } from '../actions';

const initState = {
        list:[
            {
                id: 0,
                name: 'Harry Potter',
                active: true
            },
            {
                id: 1,
                name: 'Bible',
                active: true
            },
            {
                id: 2,
                name: 'The Stories of the Meekhan Marches. North – South',
                active: true
            }
        ],
        activeBook: null
    };

export default function(state = initState, action) {
    switch (action.type) {
        case COMPLETE_BOOK:
            const newState = {list: [...state.list], activeBook: state.activeBook};

            let item = newState.list[action.payload];
            item.active = !item.active;
            newState.list[ action.payload ] = item;
            return newState;
    }

    return state;
}
