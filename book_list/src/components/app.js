import React, { Component } from 'react';
import  BookList from '../containers/book-list';
import KeyList from '../containers/key-list';
import BookDetails from '../containers/book-details';
import keyDetails from '../containers/keyDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
        <div></div>
        <KeyList />
        <keyDetails />
      </div>
    );
  }
}
