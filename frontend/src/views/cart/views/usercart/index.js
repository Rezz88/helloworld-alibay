import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';
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
                    title={product.title}
                    category={product.category}
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
                <div className='Main-items'>TOTAL ${total} </div>
            </div>
            )
        } else if (!products){
            return <div className='Main-items'>TOTAL $0.00</div>
        }
    }

    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready
        fetch("/removeFromCart", {
            method: "POST",
            body: JSON.stringify(item),
          })
        .then(x=> x.text())
        .then(y=> JSON.parse(y))
        .then(lst=> this.setState({ products: lst}))

    }

    render() {
        return  (
            <div className='App'>
                <div className='Main-items'>
                    Items in cart: {this.state.products.length} 
                </div>
                
                <div className='Main-items'>
                    
                    {this.renderProducts()}
                </div>
                <div className='Main-items'>
                    {this.renderPrice()}
                </div>
                {/* <div>
                    <button onClick={this.deleteItem}>B U Y</button>
                </div> */}
            </div>
        )

    }

}