import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import addBook from '../../actions/addBookAction';
import { getBookSuggests } from '../../actions/getBooksActions';
import styles from './styles.scss';


class BookAddInput extends Component {
    constructor(props) {
        super(props);
        this.initialState = { title: '', started: false };
        this.state = this.initialState;
    }

    addBookHandler() {
        this.setState(this.initialState);
        this.props.addBook(this.state);
        this.props.getBookSuggests(this.state.title);
    }

    render() {
        return (
            <div className={styles.addBook}>
                <Input
                  theme={styles}
                  type="text" label="Title" name="bookTitle" value={this.state.title}
                  onChange={e => this.setState({ title: e })} maxLength={50}
                />
                <Button
                  icon="library_add" label="add to bookself"
                  onClick={e => this.addBookHandler(e)} flat
                  disabled={!this.state.title || this.props.addingBook || this.props.gettingBooks}
                />
            </div>
        );
    }
}

BookAddInput.propTypes = {
    addBook: React.PropTypes.func,
    getBookSuggests: React.PropTypes.func,
    addingBook: React.PropTypes.bool,
    gettingBooks: React.PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addBook, getBookSuggests }, dispatch);
}
function mapStateToProps(state) {
    return {
        addingBook: state.shelf.addIsFetching,
        gettingBooks: state.shelf.getIsFetching,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAddInput);
