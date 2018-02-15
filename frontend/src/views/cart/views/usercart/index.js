import React, { Component } from 'react';
import '../../../../App.css';
import Cartcard from './cartcard'

export class Cartindex extends Component {
    constructor()   {
        super()
        this.state = { products: [], username: ''}

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
                return <Cartcard
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

    //add every products.price together
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
                <button onClick={this.checkout}>CHECKOUT</button>
            </div>
            )
        } else if (!products){
            return <div>TOTAL $0.00</div>
        }
    }

    checkout = () =>  {
        const { products, username } = this.state


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
    }
    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready
        fetch("/removeFromCart", {
            method: "POST",
            body: JSON.stringify(item),
          })
        console.log('Cart', item);

        //need to update backend to remove an item from cart
        // fetch("/removeFromCart", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        
            // let oldArray = this.state.products
            // let newArray = oldArray.filter(function(x) {
            // return x.name !== item.name;  
            // });

            // this.setState({products: newArray})// 
        
    }



    render() {
        return  (
            <div className='App'>
                <div>
                    Items in cart: {this.state.products.length} 
                </div>
                
                <div>
                    
                    {this.renderProducts()}
                </div>
                <div>
                    {this.renderPrice()}
                </div>
                {/* <div>
                    <button onClick={this.deleteItem}>B U Y</button>
                </div> */}
            </div>
        )

    }

}