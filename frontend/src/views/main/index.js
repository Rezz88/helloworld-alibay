import React, { Component } from 'react';
import '../../App.css';
import ProductCard from './productCard'

export class Main extends Component {
    constructor()   {
        super();
        this.state = {
            products: [],
            searchQuery: ''
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
                    description = {product.descr}
                    prodId= {product.prodId}
                    key= {product.prodId}
                    // addToBag={this.addToBag}// more limited than addToFav below, works to send one props(propId)
                    addToBag={()=>this.addToBag(product)}
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
        this.setState({searchQuery: event.target.value})
    }

    addToFav = (item) =>  {
        //pass whole item to backend to store in favs
        fetch("/fav", {
            method: "POST",
            body: JSON.stringify(this.state.products),
          })
        console.log('fav', item);
    }
    addToBag = (item) =>  {
        //pass id's to backend to store in bag
        fetch("/bag", {
            method: "POST",
            body: JSON.stringify(this.state.products),
          })
        console.log('bag', item);
    }

    componentDidMount() {
        //fetch items from backend
        // fetch("/items")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))

        //for mock testing only below
        const mockproducts = [
            {prodId: 1,
                name: 'car',
                descr: 'description of car',
                image: 'image of car'},
            {prodId: 2,
                name: 'boat',
                descr: 'description of boat',
                image: 'image of boat'},
            {prodId: 3,
                name: 'shoes',
                descr: 'description of shoes',
                image: 'image of shoes'}
            ]
         

            this.setState({products: mockproducts})
    }

    render() {
        return(
            <div>
                <div>
                    WELCOME
                </div>
                <div>
                    <input 
                        placeholder="Search for item..."
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