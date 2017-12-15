import React, {Component} from 'react';



export default class ListContainer extends Component{
    render(){

        console.log('Data: ', this.props.list);

        const list = this.props.list.map((item, index) => {
            return <li className="collection-item" key={index}>{item.title}</li>
        });


        return(
            <div>
                <ul className="collection">
                    {list}
                </ul>
            </div>
        )
    }
}