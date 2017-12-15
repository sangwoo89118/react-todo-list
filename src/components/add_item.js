

import React, {Component} from 'react';


export default class AddItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        };


        this.handleAddItem = this.handleAddItem.bind(this);


    }

    handleAddItem(e){
        e.preventDefault();
        console.log(this.state);

        this.props.onAdd(this.state);
        this.setState({
            title: '',
            details: ''
        });
    }

    render(){

        const{title, details} =this.state;

        return(
            <form onSubmit={this.handleAddItem}>
                <input onChange={ ({target: {value}}) => this.setState({title: value})} type="text" placeholder="Title" value={title}/>
                <input onChange={ ({target: {value}}) => this.setState({details: value})} type="text" placeholder="Details" value={details}/>
                <button className="btn blue darken-4">Add Item</button>
            </form>
        )
    }
}