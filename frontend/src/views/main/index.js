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

<<<<<<< HEAD


=======
>>>>>>> f0ca7760ed154ea08887dfb36d454a7089ad2bd5
    // CallParentFunction = () => {
    //     this.props.changeParentState(false)
    //   }

    renderProducts = () => {
        const { products } = this.state
<<<<<<< HEAD
        if (products.length) {
            return products.map(product => {
=======
        if (products)    {
            return products.map(product=>{
>>>>>>> f0ca7760ed154ea08887dfb36d454a7089ad2bd5
                return <ProductCard
                // plus whatever else we get from the backend
                    name={product.name}
<<<<<<< HEAD
                    image={product.image}
                    description={product.descr}
                    prodId={product.prodid}
                    key={product.prodid}
                    addToBag={this.addToBag}
                    addToFav={() => this.addToFav(product.prodid)}
=======
                    image= {product.image}
                    description= {product.descr}
                    sellerId= {product.seller}
                    prodId= {product.prodId}
                    key= {product.prodId}
                    price= {product.price}
                    // addToBag={this.addToBag}// more limited than addToFav below, works to send one props(propId)
                    addToCart={()=>this.addToCart(product)}
                    addToFav={()=>this.addToFav(product)}
>>>>>>> f0ca7760ed154ea08887dfb36d454a7089ad2bd5
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

<<<<<<< HEAD
    addToFav = (id) => {
        //pass id's to backend to store in favs
        console.log('fav', id);
    }
    addToBag = (id) => {
        //pass id's to backend to store in bag
        console.log('bag', id);
=======
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
>>>>>>> f0ca7760ed154ea08887dfb36d454a7089ad2bd5
    }

    componentDidMount() {
        //fetch items from backend uncomment when backend is ready
        // fetch("/items")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))

        //for mock testing below

        const mockproducts = [
<<<<<<< HEAD
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
=======
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
>>>>>>> f0ca7760ed154ea08887dfb36d454a7089ad2bd5
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
<<<<<<< HEAD
}

=======
}
>>>>>>> f0ca7760ed154ea08887dfb36d454a7089ad2bd5
