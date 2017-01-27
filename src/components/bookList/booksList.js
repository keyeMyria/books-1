import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BooksListItem from './booksListItem';
import { completeBook } from '../../actions';

import './books.scss';

class BooksList extends Component {
    constructor(props) {
        super(props);

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
        return (
            <div className="books">
                <span>books are here</span>
                {this.renderList()}
            </div>
        );
    }
}

BooksList.propTypes = {
    books: React.PropTypes.array,
    completeBook: React.PropTypes.func,
};

const mapStateToProps = function props(store) {
    return {
        books: store.shelf.list,
    };
};
const mapDispatchToProps = function actions(dispatch) {
    return bindActionCreators({ completeBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
