import React, { Component } from 'react';

class BooksListItem extends Component {
    render() {
        const cname = this.props.book.active ? '' : 'book-done'
        return (
            <li onClick={()=>this.props.onClick(this.props.book.id)} className={cname}>
                { this.props.book.name }
            </li>
        )
    }
}

export default BooksListItem;
