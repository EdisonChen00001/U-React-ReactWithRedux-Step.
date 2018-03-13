import React, {Component} from 'react';
import {connect} from 'react-redux';

class KeyDetail extends Component{

    render() {
        if(!this.props.Key){
            return <div>Select a KeyKeyKey get Key </div>;
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div>{this.props.searchkeys.sKey}</div>
            </div>
        );
    }


}

function mapStateToProps(state){
    return {
        key:state.activeKey
    };
}

export default connect(mapStateToProps)(KeyDetail);