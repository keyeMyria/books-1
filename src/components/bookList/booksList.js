import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import { Button } from 'react-toolbox/lib/button';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

import completeBook from '../../actions';
import getBooks, { getBookSuggestPreview } from '../../actions/getBooksActions';

import styles from './books.scss';

function getPreview(item) {
    const path = item.volumeInfo && item.volumeInfo.imageLinks;
    return path ? path.smallThumbnail : '';
}

class BooksList extends Component {
    constructor(props) {
        super(props);

        this.props.getBooks();
    }

    renderList() {
        return this.props.books.map(
            b => (
                <ListItem
                  theme={styles}
                  key={b.id} className={styles.book}
                  avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1000px-Placeholder_book.svg.png"
                  caption={b.title}
                  legend="Jonathan 'Jon' Osterman"
                  rightIcon={!b.started ? 'star_border' : 'star_half'}
                  rightActions={[
                      <Link to={`/book/${b.id}`}>
                          <Button theme={styles} onClick={() => this.props.completeBook(b.id)}>
                            Details
                        </Button>
                      </Link>,
                      <Button onClick={() => this.props.completeBook(b.id)}>Start</Button>,
                  ]}
                />
            )
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
            <div className={styles.books}>
                <List selectable ripple>
                    <ListSubHeader caption="Books" />
                    { content }
                </List>
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
