import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import BooksListItem from './booksListItem';
import completeBook from '../../actions';
import getBooks, { getBookSuggestPreview } from '../../actions/getBooksActions';

import './books.scss';

function getPreview(item) {
    const path = item.volumeInfo && item.volumeInfo.imageLinks;
    return path ? path.smallThumbnail : '';
}

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

    renderSuggests() {
        return this.props.suggests.map(
            b => <div key={b.id} id={b.id} onClick={e => this.renderPreview(e)}>
                {
                    b.id === this.props.suggestPreview.id && getPreview(b) &&
                    <img alt="book preview" src={getPreview(b)} />
                }
                { b.volumeInfo.title }
            </div>
        );
    }

    renderPreview(e) {
        this.props.getBookSuggestPreview(e.target.id);
    }

    render() {
        const content = this.props.books.length
            ? this.renderList()
            : <ProgressBar mode="indeterminate" />;
        return (
            <div className="books">
                { content }
                { this.renderSuggests() }
            </div>
        );
    }
}

BooksList.propTypes = {
    books: React.PropTypes.array,
    suggests: React.PropTypes.array,
    suggestPreview: React.PropTypes.string,
    getBooks: React.PropTypes.func,
    completeBook: React.PropTypes.func,
    getBookSuggestPreview: React.PropTypes.func,
};

const mapStateToProps = function props(store) {
    return {
        books: store.shelf.list,
        suggests: store.shelf.suggests.items || [],
        suggestPreview: store.shelf.suggestPreview,
    };
};
const mapDispatchToProps = function actions(dispatch) {
    return bindActionCreators({ completeBook, getBooks, getBookSuggestPreview }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
