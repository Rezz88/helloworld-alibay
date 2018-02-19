import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../../App.css';
import '../../grid.css';

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


    goBack = () => {
        return (
            <div className='App'>
                <h2>P O S T E D</h2>
                <div>
                    <button onClick={this.props.sellNew}> | Sell Another Item | </button>
                </div>
            </div>
        )
    }

    sellPage = () => {
        const { title, blurb, price, category } = this.state //put name in

        var addItem = () => {
            if (title.length && blurb.length && typeof (price) === 'number' && category.label) {
                this.props.addItem(title, blurb, price, category);
            } else {
                return console.log("You need to fill out all fields!")
            }

            this.setState({
                title: '',
                blurb: '',
                price: '',
                category: ''
            })

        }
        var uploadFile = (x) => {
            this.props.uploadFile(x)
        }
        //console.log(document.getElementById('italics500').files)
        console.log(document.getElementById('italics500'))
        return (
            <div className='App'>
                <div className="Main-items">
                <div className="itemDisplayBox">
                    <div className='imageDiv'>
                        <img id="newImageStyle" src={this.props.imageName} alt='image' />
                    </div>
                    
                        <div className="sellInfo">
                            <div className="sellFields">
                                <Select
                                    className="sellFields"
                                    name="categories"
                                    value={category}
                                    onChange={e => this.setState({ category: e })}
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
                            </div>
                            <div>
                                <input className="sellFields" id="info" placeholder="Item Name" value={title} onChange={(e) => this.setInputValue('title', e.target.value)}></input>
                            </div>
                            <div>
                                <input className="sellFields" id="info" placeholder="Description" value={blurb} onChange={(e) => this.setInputValue('blurb', e.target.value)}></input>
                            </div>
                            <div>
                                <input className="sellFields" id="info" type="number" placeholder="Price" onChange={(e) => this.setInputValue('price', e.target.value)}></input>
                                {/* value={Number(price)} */}
                            </div>
                            <div>
                                <input className="sellFields" type="file" id="italics500" onChange={e => uploadFile(e.target.files[0])} />
                            </div>
                            <div>
                                <button className="button2" id="info" onClick={addItem}>Sell Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ itemPosted: nextProps.itemPosted, username: nextProps.username })
        console.log('this is props: ', nextProps)
    }
    componentDidMount() {
        console.log(document.getElementById('newImageStyle').style)
    }
    render() {

        //console.log(this.state.category.label)
        return (
            <div>
                {this.state.itemPosted ? this.goBack() : this.sellPage()}
            </div>
        )
    }

}

//<input className="itemName" placeholder="Item Name" value={name} onChange={(e) => this.setInputValue('name', e.target.value)}></input>