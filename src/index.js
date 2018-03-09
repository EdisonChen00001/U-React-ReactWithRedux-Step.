import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/seearch_bar'

const API_KEY = "AIzaSyAcqaU2p5x7l_FRU35I94wlld4Ap4tLrfY";


const App = function() {
  return <div>
    <SearchBar />
  </div>
}



ReactDOM.render(<App />, document.querySelector('.container'));