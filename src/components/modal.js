
import React, {Component} from 'react';
import '../assets/css/modal.css';

export default class Modal extends Component{
    render(){
        return(
            <div className="confirm-modal">
                <div className="modal-content">

                        <div className="card">
                            <div className="card-content">
                                <p>This is some text about stuff!</p>
                            </div>
                            <div className="card-action">
                                <button className="btn green">Confirm</button>
                                <button className="btn red">Cancel</button>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}