
import React,{Component} from 'react';
import { connect } from 'react-redux';      //glue is between react and redux
import selectKeys from '../actions/index';


class KeyList extends Component{
    renderList(){

        return this.props.searchkeys.map((searchkey)=>{
            return(
                <li 
                    key = {searchkey.sKey} 
                    onClick = {() => this.props.selectKeys(key)}
                    className = "list-group-item"
                >
                {searchkey.sKey}
                </li>
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
    return {
        searchkeys:state.searchkeys
    };
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({selectKey:selectKey}, dispatch);
}


export default connect(mapStateToProps, )(KeyList);
