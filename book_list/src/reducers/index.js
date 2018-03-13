
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SearchkeysReducer from './searchKey';
import activeBook from './reducer_active_book';
import activeKey from './reducer_active_key';

const rootReducer = combineReducers({
  books : BooksReducer,
  searchkeys : SearchkeysReducer,
  activeBook: activeBook,
  activeKey : activeKey,
});

export default rootReducer;
