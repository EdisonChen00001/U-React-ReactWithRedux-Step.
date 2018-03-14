import React, {Component} from 'react';
 
class CustomerSearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term : ''};
        this.onChangeEvent = this.onChangeEvent.bind(this);
}

 onChangeEvent(event){
    console.log(event.target.value)
    this.setState({term: event.target.value})
}

onFormSubmit(event){
    event.preventDefault();
}


    render(){
        return (
            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <label>this is practice</label>
                <input 
                value = {this.state.term}
                onChange = {this.onChangeEvent}
                />
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}

export default CustomerSearchBar;