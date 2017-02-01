import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import addBook from '../../actions/addBookAction';

class BookAddInput extends Component {
    constructor(props) {
        super(props);
        this.initialState = { title: '', started: false };
        this.state = this.initialState;
    }

    addBookHandler() {
        this.setState(this.initialState);
        this.props.addBook(this.state);
    }

    render() {
        return (
            <section>
                <Input
                  type="text" label="Title" name="bookTitle" value={this.state.title}
                  onChange={e => this.setState({ title: e })} maxLength={50}
                />
                <Button
                  icon="library_add" label="add to bookself"
                  onClick={e => this.addBookHandler(e)} flat
                  disabled={!this.state.title || this.props.addingBook || this.props.gettingBooks}
                />
            </section>
        );
    }
}

BookAddInput.propTypes = {
    addBook: React.PropTypes.func,
    addingBook: React.PropTypes.bool,
    gettingBooks: React.PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addBook }, dispatch);
}
function mapStateToProps(state) {
    return {
        addingBook: state.shelf.addIsFetching,
        gettingBooks: state.shelf.getIsFetching,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAddInput);
