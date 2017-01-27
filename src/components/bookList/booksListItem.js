// import React from 'react';
import React from 'react';

function BooksListItem(props) {
    const cname = props.book.started ? '' : 'book-done';
    return (
        <li onClick={() => props.onClick(props.book.id)} className={cname}>
            { props.book.title }
        </li>
    );
}

BooksListItem.propTypes = {
    book: React.PropTypes.object,
    onClick: React.PropTypes.func,
};

export default BooksListItem;
