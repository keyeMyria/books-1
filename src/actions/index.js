export const COMPLETE_BOOK = 'COMPLETE_BOOK';

export function completeBook( payload ) {
    return {
        type: COMPLETE_BOOK,
        payload: payload
    }
}
