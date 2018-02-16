import React, { Component } from 'react';
import '../../../../App.css';
import Checkoutcard from './checkoutcard'

export class Checkoutindex extends Component {
    constructor()   {
        super()
        this.state = { 
            products: [],
            payment: false,
            thanks: false
        }

    }

    componentWillMount()    {
        this.setState({username: this.props.username})
    }


    componentDidMount() {
        fetch("/cart", {
            method: 'post',
            body: JSON.stringify({username: this.state.username})
          })
        .then(x=> x.text())
        .then(y=> JSON.parse(y))
        .then(lst=> this.setState({ products: lst}))
    }

    renderProducts = () => {
        const { products } = this.state
        if (products)    {
            return products.map(product=>{
                return <Checkoutcard
                // plus whatever else we get from the backend
                    seller={product.seller}
                    productID= {product.productID}
                    description= {product.blurb}
                    name={product.name}
                    image= {product.image}
                    sellerId= {product.seller}
                    key= {product.prodId}
                    price= {(product.price)}
                    deleteItem={()=>this.deleteItem(product)}
                />  
            })
        } else if (!products){
            return <div>cart is empty</div>
        }
    }


    renderPrice = () => {
        const {products} = this.state
        
        if (products)   {
            var total = 0
            for (var i = 0; i < products.length; i++)   {
                total += parseInt(products[i].price, 10)
        }
        return (
            <div>
                <div>TOTAL ${total} </div>
                <button className="button2" onClick={this.checkout}>CHECKOUT</button>
            </div>
            )
        } else if (!products){
            return <div>TOTAL $0.00</div>
        }
    }

    checkout = () =>  {
        const { products, username } = this.state
        this.setState({payment: true})
        
        


        var toSend = [{username: username}]
        products.forEach((item, pos) => {
            if (item.productID) {
                toSend.push(item)
            }
        } )
        //pass whole array to backend to proceed to checkout
        fetch("/toBuy", {
            method: "POST",
            body: JSON.stringify(toSend)
          })
            //   fetch("/cart", {
            //     method: 'post',
            //     body: JSON.stringify({username: this.state.username})
            //   })
            // .then(x=> x.text())
            // .then(y=> JSON.parse(y))
            // .then(lst=> this.setState({ products: lst}))
        
            

    }

    thanks = () => {
        this.setState({})
    }
    payment = () => {
        this.setState({thanks: true})
    }


    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username

        let oldArray = this.state.products
            let newArray = oldArray.filter(function(x) {
            return x.name !== item.name;  
            });

            this.setState({products: newArray})// 
        //pass id's to backend to store in cart uncomment when backend is ready
        fetch("/removeFromCart", {
            method: "POST",
            body: JSON.stringify(item),
          })
        console.log('Cart', item);

    }



    render() {
        if (!this.state.payment)    {
        return  (
            <div className='App'>
                <div className='Main-items'>
                    SHIPPING INFO
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
    if (this.state.payment && !this.state.thanks)    {
        return (
            <div className='App'>
            <div>
                <a>P A Y M E N T</a>
            </div>
            <div>
                <input placeholder="Carn Number"/>
            </div>
            <div>
                <input placeholder="Exp Date"/>
            </div>
            <div>
                <input placeholder="Name"/>
            </div>
            <div>
                <button onClick={this.payment}> Buy </button>
            </div>
        </div>
        )
    }


    // if (!this.state.thanks)    {
    //     return (
    //         <div className='App'>
    //         <div>
    //             <a>thanks</a>
    //         </div>
    //         {/* <div>
    //             <button onClick={this.thanks}> PAY </button>
    //         </div> */}
    //     </div>
    //     )
    // }
    if (this.state.payment && this.state.thanks)    {
        return (
            <div className='App'>
            <div>
                <a>T H A N K S</a>
            </div>
            <div>
                <button onClick={this.pay}> Back to main? </button>
            </div>
        </div>
        )
    }

    }

}
