
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SearchkeysReducer from './searchKey';
import activeBook from './reducer_active_book';

const rootReducer = combineReducers({
  books : BooksReducer,
  searchkeys : SearchkeysReducer,
  activeBook: activeBook
});

export default rootReducer;
