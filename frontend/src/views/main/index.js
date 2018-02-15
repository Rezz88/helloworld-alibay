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
                    seller={product.seller}
                    productID= {product.productID}
                    description= {product.blurb}
                    username={product.username}
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
            return <div>Nothing available</div>
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
        fetch("/addToCart", {
            method: "POST",
            body: JSON.stringify(item),
          })
        console.log('Cart', item);
    }

    componentDidMount() {

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
        let forSaleProducts = []
        // fetching items from backend
        fetch('/main')
        .then(x=> x.text())
        .then(y=> JSON.parse(y))
        // .then(y=>{console.log('y=',y); return y})
        .then(lst=>{
                    lst.forEach(item=> {
                        forSaleProducts.push(item.forSale)
                        }
                    )
                    var forSaleAll = []
            for (var i = 0; i < forSaleProducts.length; i++)   {
                for (var j = 0; j < forSaleProducts[i].length; j++) {
                    forSaleAll.push(forSaleProducts[i][j])
            }}
            console.log('forsaleAll = ',forSaleAll)
            return this.setState({products: forSaleAll})
                }
            )
            // this.setState({ products: lst})
                
        
            //concat these arrays
            
            
            

        // for mock testing below
        
        
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
                    <button className="button2">Search</button>
                </div>
                <div>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}
