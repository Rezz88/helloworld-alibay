import React, { Component } from 'react';
import '../../../../App.css';
import Checkoutcard from './checkoutcard'

export class Checkoutindex extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            profile: {},
            newProfile: {
                address:    {
                    streetAddress: '',
                    city: '',
                    stateProvice: '',
                    postalCode: ''
                }
            },
            payment: false,
            thanks: false
        }
    }

    componentWillMount() {
        this.setState({ username: this.props.username })
    }
    backToMain = () => {
        this.props.ChangeComponent('Main')
    }

    componentDidMount() {
        fetch("/cart", {
            method: 'post',
            body: JSON.stringify({ username: this.state.username })
        })
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(lst => this.setState({ products: lst }));

        fetch("/profile", {
            method: 'post',
            body: JSON.stringify({ username: this.state.username })
        })
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(user => this.setState({ profile: user }))
    }

    renderProducts = () => {
        const { products } = this.state
        if (products) {
            return products.map(product => {
                return <Checkoutcard
                    // plus whatever else we get from the backend
                    seller={product.seller}
                    productID={product.productID}
                    description={product.blurb}
                    name={product.name}
                    image={product.image}
                    sellerId={product.seller}
                    key={product.prodId}
                    price={(product.price)}
                    deleteItem={() => this.deleteItem(product)}
                />
            })
        } else if (!products) {
            return <div>cart is empty</div>
        }
    }

    renderShipping = () => {
        const { profile } = this.state
        if (profile.shippingAddress !== undefined) {
            return (
                <div>
                    <div>
                    <div>{profile.shippingAddress.streetAddress}</div>
                    </div>
                    <div>
                    <div>{profile.shippingAddress.city}</div>
                    </div>
                    <div>
                    <div>{profile.shippingAddress.stateProvice}</div>
                    </div>
                    <div>
                    <div>{profile.shippingAddress.postalCode}</div>
                    </div>
                    
                </div>
            )
        } else {
            return (
                <div>
                    <div>no shipping info</div>
                    <div>{this.showShippingEditFields()}</div>
                </div>
            )
        }
    }

    setInputValue =(key, value)=> {
        var newProfileTemp = this.state.newProfile
        newProfileTemp.address[key] = value
        this.setState({newProfile: newProfileTemp})
      }

    showShippingEditFields = () => {
        const { streetAddress , city, stateProvice, postalCode} = this.state.newProfile
        return (
            <div>
                <div>
                    <input placeholder="street address" value={streetAddress} onChange={(e)=> this.setInputValue('streetAddress', e.target.value)} />
                </div>
                <div>
                    <input placeholder="city" value={city} onChange={(e)=> this.setInputValue('city', e.target.value)}/>
                </div>
                <div>
                    <input placeholder="state/provice" value={stateProvice} onChange={(e)=> this.setInputValue('stateProvice', e.target.value)} />
                </div>
                <div>
                    <input placeholder="postal code" value={postalCode} onChange={(e)=> this.setInputValue('postalCode', e.target.value)} />
                </div>
                <div>
                    <button onClick={()=>this.saveAddress(this.state.newProfile)}>save</button>
                </div>
            </div>
        )
    }

    saveAddress= (item) =>  {
        item.username = this.props.username
        console.log(item)
        fetch('/editProfile', {
            method: 'post',
            body: JSON.stringify(item)
        })
    }

    renderPrice = () => {
        const { products } = this.state

        if (products) {
            var total = 0
            for (var i = 0; i < products.length; i++) {
                total += parseInt(products[i].price, 10)
            }
            return (
                <div>
                    <div>TOTAL ${total} </div>
                    <button className="button2" onClick={this.checkout}>CHECKOUT</button>
                </div>
            )
        } else if (!products) {
            return <div>TOTAL $0.00</div>
        }
    }

    checkout = () => {
        const { products, username } = this.state
        this.setState({ payment: true })

        var toSend = [{ username: username }]
        products.forEach((item, pos) => {
            if (item.productID) {
                toSend.push(item)
            }
        })
        //pass whole array to backend to proceed to checkout
        fetch("/toBuy", {
            method: "POST",
            body: JSON.stringify(toSend)
        })
    }

    payment = () => {
        this.setState({ thanks: true })
    }

    deleteItem = (item) => {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready
        fetch("/removeFromCart", {
            method: "POST",
            body: JSON.stringify(item),
        })
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(lst => this.setState({ products: lst }))

    }

    render() {
        if (!this.state.payment) {
            return (
                <div className='App'>
                    <div className='Main-items'>
                        SHIPPING INFO
                </div>
                    <div>
                        {this.renderShipping()}
                    </div>

                    <div className='Main-items'>
                        ORDER SUMMARY
                </div>
                    <div className='Main-items'>
                        Items in checkout: {this.state.products.length}
                    </div>

                    <div>
                        {this.renderProducts()}
                    </div>
                    <div>
                        {this.renderPrice()}
                    </div>
                </div>
            )
        }
        if (this.state.payment && !this.state.thanks) {
            return (
                <div className='App'>
                    <div>
                        <a>P A Y M E N T</a>
                    </div>
                    <div>
                        <input placeholder="Carn Number" />
                    </div>
                    <div>
                        <input placeholder="Exp Date" />
                    </div>
                    <div>
                        <input placeholder="Name" />
                    </div>
                    <div>
                        <button onClick={this.payment}> Buy </button>
                    </div>
                </div>
            )
        }
        if (this.state.payment && this.state.thanks) {
            return (
                <div className='App'>
                    <div>
                        <a>T H A N K S</a>
                    </div>
                    <div>
                        <button onClick={this.backToMain}> Back to main? </button>
                    </div>
                </div>
            )
        }

    }

}
