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
        if (products.length)    {
            return products.map(product=>{
                // console.log(product)
                return <ProductCard
                // plus whatever else we get from the backend
                    username={product.username}
                    productID= {product.productID}
                    // description= {product.descr.descr}
                    // sellerId= {product.seller}
                    // prodId= {product.prodId}
                    // key= {product.prodId}
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
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass whole item to backend to store in favs
        // fetch("/fav", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        
        console.log('fav', item);
    }
    addToCart = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready
        // fetch("/cart", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        console.log('Cart', item);
    }

    componentDidMount() {
        let forSaleProducts = []
        // fetch items from backend uncomment when backend is ready
        fetch("/items")
        .then(x=> x.text())
        .then(y=> JSON.parse(y))
        .then(lst=> 
            // this.setState({ products: lst})
                lst.forEach(item=> {
                forSaleProducts.push(item.forSale)
            })
        )
            //concat these arrays
            var forSaleAll = []
            for (var i = 0; i < forSaleProducts.length; i++)   {
                for (var j = 0; j < forSaleProducts[i].length; j++) {
                    forSaleAll.push(forSaleProducts[i][j])
            }}
            
            this.setState({products: forSaleAll})
            
            console.log('forsaleAll = ',forSaleAll)

        // for mock testing below
        
        // const lst = [
        //     {  
        //         username: 'john',
        //         forSale: [
        //             {
        //             productID: 1234,
        //             username: 'john',
        //             price: 1000,
        //             blurb: 'yadayada'
        //             },
        //             {
        //             productID: 4563456,
        //             username: 'john',
        //             price: 1000,
        //             blurb: 'yadayada'
        //             }
        //         ]
        //     },
        //     {  
        //         username: 'steve',
        //         forSale: [
        //             {
        //             productID: 234,
        //             username: 'steve',
        //             price: 1000,
        //             blurb: 'yadayada'
        //             },
        //             {
        //                 productID: 675768576,
        //                 username: 'steve',
        //                 price: 1000,
        //                 blurb: 'yadayada'
        //                 }
        //         ]
        //     },
        //     {  
        //         username: 'marry',
        //         forSale: [
        //             {
        //             productID: 124,
        //             username: 'marry',
        //             price: 1000,
        //             blurb: 'yadayada'
        //             },
        //             {
        //             productID: 1555554,
        //             username: 'marry',
        //             price: 1000,
        //             blurb: 'yadayada'
        //             }
        //         ]
        //     }
        //     ]
            // this.setState({products: mockproducts})
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
                    <button>search</button>
                </div>
                <div>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
