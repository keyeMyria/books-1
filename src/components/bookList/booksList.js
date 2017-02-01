import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import BooksListItem from './booksListItem';
import completeBook from '../../actions';
import getBooks from '../../actions/getBooksAction';

import './books.scss';

class BooksList extends Component {
    constructor(props) {
        super(props);

        this.props.getBooks();
        this.onBookClick = this.onBookClick.bind(this);
    }
    onBookClick(id) {
        this.props.completeBook(id);
    }

    renderList() {
        return this.props.books.map(
            b => <BooksListItem key={b.id} book={b} onClick={this.onBookClick} />
        );
    }

    render() {
        const content = this.props.books.length
            ? this.renderList()
            : <ProgressBar mode="indeterminate" />;
        return (
            <div className="books">
                { content }
            </div>
        );
    }
}

BooksList.propTypes = {
    books: React.PropTypes.array,
    getBooks: React.PropTypes.func,
    completeBook: React.PropTypes.func,
};

const mapStateToProps = function props(store) {
    return {
        books: store.shelf.list,
    };
};
const mapDispatchToProps = function actions(dispatch) {
    return bindActionCreators({ completeBook, getBooks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
