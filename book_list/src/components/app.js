import React, { Component } from 'react';
import  BookList from '../containers/book-list';
import KeyList from '../containers/key-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <div></div>
        <KeyList />
      </div>
    );
  }
}
