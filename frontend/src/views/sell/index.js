import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../../App.css';

export class Sell extends Component {
    constructor() {
        super();
        this.state = {
            itemPosted: false,
            username: '',
            title: '',
            blurb: '',
            price: '',
            category: ''
        }
    }

    setInputValue = (key, value) => {
        this.setState({ [key]: value }, () => { this.setState({ price: Number(this.state.price) }) })
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
        const { title, blurb, price, category } = this.state //put name in

        var addItem = () => {
            this.props.addItem(title, blurb, price)
        }
        var uploadFile = (x) => {
            this.props.uploadFile(x)
        }
        console.log(this.props.imageName)
        return (
            <div className='App'>
<<<<<<< HEAD
                <input type="file" id="input" onChange={e => uploadFile(e.target.files[0])} />
                <img src={this.props.imageName} alt='Product' />
                <Select
                    name="categories"
                    value={category}
                    onChange={e => this.setState({category: e})}
                    options={[
                        { value: 'Artisanal', label: 'Artisanal' },
                        { value: 'Audio', label: 'Audio' },
                        { value: 'Automotive', label: 'Automotive' },
                        { value: 'Beauty and Health', label: 'Beauty and Health' },
                        { value: 'Books/Audible', label: 'Books/Audible' },
                        { value: 'Clothing', label: 'Clothing' },
                        { value: 'Electronics', label: 'Electronics' },
                        { value: 'Home, Garden and Tools', label: 'Home, Garden and Tools' },
                        { value: 'Toys, Kids and Baby', label: 'Toys, Kids and Baby' },
                        { value: 'Odd Jobs', label: 'Odd Jobs' },
                        { value: 'Other', label: 'Other' }
                    ]}
                />
=======
                <img src= {this.props.imageName} alt='Product' />
>>>>>>> 2267ac2ee1a612bcffae15131710ce9e695463c8
                <input className="title" placeholder="Item Name" value={title} onChange={(e) => this.setInputValue('title', e.target.value)}></input>
                <input className="blurb" placeholder="Description" value={blurb} onChange={(e) => this.setInputValue('blurb', e.target.value)}></input>
                <input className="price" type="number" placeholder="Price" value={Number(price)} onChange={(e) => this.setInputValue('price', e.target.value)}></input>
                <button className="button2" onClick={addItem}>Sell Item</button>
<<<<<<< HEAD

=======
                <div>
                <input className="button" type="file" id="input" onChange={e => uploadFile(e.target.files[0])} />
                </div>
>>>>>>> 2267ac2ee1a612bcffae15131710ce9e695463c8
            </div>)
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ itemPosted: nextProps.itemPosted, username: nextProps.username })
        console.log('this is props: ', nextProps)
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