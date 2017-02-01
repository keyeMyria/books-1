// import firebase from 'firebase';

const db = localStorage;
const defaultName = 'vshulyk';
const getBooks = (name = defaultName) => JSON.parse(db.getItem(name) || '[]');
const addBook = function (name, book) {
    if (book) {
        const all = getBooks(name);
        db.setItem(name, JSON.stringify([book, ...all]));
    }
};

const init = [{
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
}];
if (!getBooks().length) {
    init.forEach(x => addBook(defaultName, x));
}

export default {
    // database: firebase.database(),
    addBook,
    getBooks,
    shelfName: defaultName,
};
export const API_KEY = 'AIzaSyB00qBN6HfwOtaVZmyiPlEG4TrnewQ0DZc';
export const searchURI = 'https://www.googleapis.com/books/v1/volumes';
