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
        if (products.length)    {
            // return  <ProductCard
            //     name='stuff'
            //     image= 'image'
            //     description = 'descr'
            //     prodID= 'prodID'
            // />
            return products.map(product=>{
                return <ProductCard
                    name={product.name}
                    image= {product.image}
                    description = {product.descr}
                    prodId= {product.prodid}
                    key= {product.prodid}
                    addToBag={this.addToBag}
                    addToFav={()=>this.addToFav(product.prodid)}
                />
            })
        } else {
            return <div>no products</div>
        }
    }
    submitQuery = () => {
        //fetch data from endpoint and pass it this.state.searchQuery
        const mockproducts = [
            {prodid: 1,
                name: 'car',
                descr: 'cool car',
                image: 'sweet image'},
            {prodid: 2,
                name: 'boat',
                descr: 'cool boat',
                image: 'sweet image of boat'},
            {prodid: 3,
                name: 'shoes',
                descr: 'sneeeeeeekers',
                image: 'sweet image of kicks'}
            ]
            this.setState({products: mockproducts})
    }

    onInput = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    addToFav = (id) =>  {
        //pass id's to backend to store in favs
        console.log('fav', id);
    }
    addToBag = (id) =>  {
        //pass id's to backend to store in bag
        console.log('bag', id);
    }



    render() {
        return(
            <div>
                <div>
                    you are at main
                </div>
                <div>
                    <input 
                        placeholder="Search for item..."
                        value={this.state.searchQuery}
                        onChange={this.onInput}>
                    </input>
                    <button onClick={this.submitQuery}>submit</button>
                </div>
                <div>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
  }

