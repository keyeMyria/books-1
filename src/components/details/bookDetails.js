import React, { Component } from 'react';
import { connect } from 'react-redux';


class BooksDetails extends Component {
    log() {
        console.log('this', this);
    }
    render() {
        const bId = +this.props.params.bookId;
        this.log();
        const book = this.props.books.find(e => e.id === bId);
        return (
            <div>
                {book.title}
            </div>
        );
    }
}

BooksDetails.propTypes = {
    books: React.PropTypes.array,
    params: React.PropTypes.object,
};

const mapStateToProps = function props(store) {
    return {
        books: store.shelf.list,
    };
};

export default connect(mapStateToProps, null)(BooksDetails);

