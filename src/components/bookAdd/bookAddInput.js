import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addBook } from '../../actions';

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
                />
            </section>
        );
    }
}

BookAddInput.propTypes = {
    addBook: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookAddInput);
