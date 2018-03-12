import React , {Component} from 'react';
import { connect } from 'react-redux';      //glue is between react and redux
//import BooksReducer from '../reducers/reducer_books';


class BookList extends Component{
     
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li key={book.title} className = "list-group-item">{book.title}</li>
            );
        });
    }
    
    render(){
        return (
            <ul className = "list-group col-sm-4">
                {this.renderList()}
            </ul>

        )
    }
}

function mapStateToProps(state){
    //what ever is returned will show up as props
    //inside of booklist

    return {
        books:state.books
    };
}

export default connect(mapStateToProps)(BookList);