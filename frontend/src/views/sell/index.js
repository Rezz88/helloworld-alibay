import React, { Component } from 'react';
import '../../App.css';

export class Sell extends Component {
    constructor() {
        super();
        this.state = { 
            itemPosted: false,
            name: 'asd',
            description: 'asd', 
            price: '123' 
        }
    }

    setInputValue = (key, value) => {
        this.setState({ [key]: value })
    }
    sellNew = () => {
        this.setState({ itemPosted: false })
    }

    goBack = () => {
        return (
            <div className='App'>
                <h2>P O S T E D</h2>
                <div>
                    <button onClick={this.sellNew}> | Sell Another Item | </button>
                </div>
            </div>
        )
    }


    sellPage = () => {
        const { name, description, price } = this.state

        var addItem = () => {
            this.props.addItem(name, description, price)
        }
        return (
            <div className='App'>
                <input className="itemName" placeholder="Item Name" value={name} onChange={(e) => this.setInputValue('name', e.target.value)}></input>
                <input className="itemDescription" placeholder="Description" value={description} onChange={(e) => this.setInputValue('description', e.target.value)}></input>
                <input className="price" type="number" placeholder="Price" value={price} onChange={(e) => this.setInputValue('price', e.target.value)}></input>
                <button onClick={addItem}>Sell Item!</button>
            </div>)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ itemPosted: nextProps.itemPosted }) 
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.itemPosted ? this.goBack() : this.sellPage()}
            </div>
        )
    }
}