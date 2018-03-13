import React , {Component} from 'react';
import { connect } from 'react-redux';      //glue is between react and redux
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';



class BookList extends Component{
     
    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li 
                    key={book.title} 
                    onClick = {() => this.props.selectBook(book)}
                    className = "list-group-item">{book.title}</li>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook}, dispatch);
}

//promote booklist from a componentnet to a container it need to know
//about this new dispatch method selectbook make it available 
//as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList);