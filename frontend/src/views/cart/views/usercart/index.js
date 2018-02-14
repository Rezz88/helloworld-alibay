import React, { Component } from 'react';
import '../../../../App.css';
import Cartcard from './cartcard'

export class Cartindex extends Component {
    constructor()   {
        super()
        this.state = { products: []}

    }

    componentDidMount() {
        //fetch items from backend uncomment when backend is ready
        // fetch("/cart")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))

        const mockCart = [
            {prodId: 1,
                name: 'car //  mock data',
                descr: 'description of car is mock data',
                price: 1000,
                image: 'image of car',
                sellerId: 'John'},
            {prodId: 2,
                name: 'boat //  mock data',
                descr: 'description of boat',
                price: 2000,
                image: 'image of boat',
                sellerId: 'barb'}
            ]
            this.setState({products: mockCart})
    }
    
    renderProducts = () => {
        const { products } = this.state
        if (products)    {
            return products.map(product=>{
                return <Cartcard
                // plus whatever else we get from the backend
                    name={product.name}
                    image= {product.image}
                    description= {product.descr}
                    sellerId= {product.seller}
                    prodId= {product.prodId}
                    key= {product.prodId}
                    price= {'$'+product.price}
                    checkout={()=>this.checkout(product)}
                    deleteItem={()=>this.deleteItem(product)}
                />
                
            })
            
        } else {
            return <div>cart is empty</div>
        }
    }

    //add every products.price together
    renderPrice = () => {
        const {products} = this.state
        if (products)   {
            var total = 0
        for (var i = 0; i < products.length; i++)   {
            total += products[i].price
        }
        return total}
        else {
            return <div>$0.00</div>
        }
    }

    checkout = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass whole item to backend to proceed to checkout
        // fetch("/checkout", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        // this.setState({products: []})// 
        
        let newArray = this.state.products
        let productsRemoved = newArray.filter(function(el) {
        return el.name !== item.name;  
        });
        this.setState({products: productsRemoved})// 

        console.log('checkout', item);
    }
    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //need to update backend to remove an item from cart
        // fetch("/delete", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        
        let oldArray = this.state.products
        let newArray = oldArray.filter(function(x) {
        return x.name !== item.name;  
        });

        console.log('new array =', newArray);
        console.log('old array =', this.state.products)

        this.setState({products: newArray})// 
        console.log(' delete this item only =' ,item)
        
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
                    {' YOUR TOTAL IS $'+this.renderPrice()}
                </div>
            </div>
        )

    }

}
