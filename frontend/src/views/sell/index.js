import React, { Component } from 'react';
import '../../App.css';

export class Sell extends Component {
    constructor() {
        super();
        this.state = { 
            itemPosted: false,
            username: '',
            name: '',
            blurb: '', 
            price: '' 
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
        const { blurb, price } = this.state //put name in

        var addItem = () => {
            this.props.addItem( blurb, price) //put name in
        }
        return (
            <div className='App'>
                
                <input className="blurb" placeholder="Description" value={blurb} onChange={(e) => this.setInputValue('blurb', e.target.value)}></input>
                <input className="price" type="number" placeholder="Price" value={price} onChange={(e) => this.setInputValue('price', e.target.value)}></input>
                <button className="button2" onClick={addItem}>Sell Item</button>
            </div>)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ itemPosted: nextProps.itemPosted, username: nextProps.username }) 
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

//<input className="itemName" placeholder="Item Name" value={name} onChange={(e) => this.setInputValue('name', e.target.value)}></input>