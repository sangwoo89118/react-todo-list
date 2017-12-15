import 'materialize-css/dist/css/materialize.css';
import React from 'react';
import todoData from '../todo_data';
import ListContainer from "./list_container";
import AddItem from './add_item';



class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            todoData: todoData
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(item){
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData]
        })
    }

    render() {

        const{todoData} = this.state;


        return(
            <div className="container">
                <h1 className="center-align">To Do List</h1>
                <AddItem onAdd={this.addItem}/>
                <ListContainer list={todoData}/>
            </div>
        )
    }
};

export default App;
