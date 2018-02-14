import React, { Component } from 'react';
import '../../App.css';
import ProductCard from './productCard'

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            // searchQuery: '' //for the 
        }
    }

    // CallParentFunction = () => {
    //     this.props.changeParentState(false)
    //   }

    renderProducts = () => {
        const { products } = this.state
        if (products)    {
            return products.map(product=>{
                return <ProductCard
                // plus whatever else we get from the backend
                    name={product.name}
                    image= {product.image}
                    description= {product.descr}
                    sellerId= {product.seller}
                    prodId= {product.prodId}
                    key= {product.prodId}
                    price= {product.price}
                    // addToBag={this.addToBag}// more limited than addToFav below, works to send one props(propId)
                    addToCart={()=>this.addToCart(product)}
                    addToFav={()=>this.addToFav(product)}
                />
            })
        } else {
            return <div>nothing</div>
        }
    }
    submitQuery = () => {
        //stretch goal for search form
        //fetch data from endpoint and pass it this.state.searchQuery
        // fetch('/search', {
        //     method: 'post',
        //     body: {
        //       //
        //     }
        //   })
    }

    //stretch goal for search function
    onInput = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    addToFav = (item) =>  {
        //pass whole item to backend to store in favs
        // fetch("/fav", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        console.log('fav', item);
    }
    addToCart = (item) =>  {
        //pass id's to backend to store in cart uncomment when backend is ready
        // fetch("/cart", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        console.log('Cart', item);
    }

    componentDidMount() {
        //fetch items from backend uncomment when backend is ready
        // fetch("/items")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))

        //for mock testing below

        const mockproducts = [
            {prodId: 1,
                name: 'car',
                descr: 'description of car',
                price: '$1000',
                image: 'image of car',
                sellerId: 'John'},
            {prodId: 2,
                name: 'boat',
                descr: 'description of boat',
                price: '$1000',
                image: 'image of boat',
                sellerId: 'sue'},
            {prodId: 3,
                name: 'shoes',
                descr: 'description of shoes',
                price: '$1000',
                image: 'image of shoes',
                sellerId: 'bob'}
            ]
         

            this.setState({products: mockproducts})
    }

    render() {
        return(
            <div className='App'>
                <div className='Main-items'>
                    W E L C O M E
                </div>
                <div className='Main-items'>
                    <input  
                        placeholder="Does not work yet..."
                        value={this.state.searchQuery}
                        onChange={this.onInput}>
                    </input>
                    {/* <button onClick={this.submitQuery}>submit</button> ********stretch goal for a search function */}
                    <button>submit</button>
                </div>
                <div>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
