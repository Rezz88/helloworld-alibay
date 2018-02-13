import React, { Component } from 'react';
import '../../App.css';
import ProductCard from './productCard'

export class Main extends Component {
    constructor() {
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
        if (products.length) {
            return products.map(product => {
                return <ProductCard
                    name={product.name}
                    image={product.image}
                    description={product.descr}
                    prodId={product.prodid}
                    key={product.prodid}
                    addToBag={this.addToBag}
                    addToFav={() => this.addToFav(product.prodid)}
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

    onInput = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    addToFav = (id) => {
        //pass id's to backend to store in favs
        console.log('fav', id);
    }
    addToBag = (id) => {
        //pass id's to backend to store in bag
        console.log('bag', id);
    }

    componentDidMount() {
        //for mock testing only
        const mockproducts = [
            {
                prodid: 1,
                name: 'car',
                descr: 'description of car',
                image: 'image of car'
            },
            {
                prodid: 2,
                name: 'boat',
                descr: 'description of boat',
                image: 'image of boat'
            },
            {
                prodid: 3,
                name: 'shoes',
                descr: 'description of shoes',
                image: 'image of shoes'
            }
        ]
        this.setState({ products: mockproducts })
    }

    render() {
        return (
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

