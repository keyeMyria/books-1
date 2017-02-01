import { COMPLETE_BOOK } from '../common/actionTypes';


export default function completeBook(payload) {
    return {
        type: COMPLETE_BOOK,
        payload,
    };
}

