import React, { Component } from 'react';
import '../../App.css';

export class Sell extends Component {
    constructor() {
        super();
        this.state = {formCompleted: false}
    }
   
    setInputValue=(key, value) => {
        this.setState({[key]: value})
    }

    render() {
        return  (
        <div>
            <input className="itemid" placeholder="Item Name" value={itemid} onChange={(e)=> this.setInputValue('itemid', e.target.value)}></input>
            <input className="itemDescription" placeholder="Description" value={password} onChange={(e)=> this.setInputValue('description', e.target.value)}></input>
        </div>
        )

    }

}
export default Sell;