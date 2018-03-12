
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SearchkeysReducer from './searchKey'

const rootReducer = combineReducers({
  books : BooksReducer,
  searchkeys : SearchkeysReducer
});

export default rootReducer;
