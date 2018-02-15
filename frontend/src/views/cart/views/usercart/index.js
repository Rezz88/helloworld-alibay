import React, { Component } from 'react';
import '../../../../App.css';
import Cartcard from './cartcard'

export class Cartindex extends Component {
    constructor() {
        super()
        this.state = { products: [] }

    }

    componentDidMount() {
        //fetch items from backend uncomment when backend is ready
        // fetch("/cart")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))

<<<<<<< HEAD
        const mockCart = [
            {
                prodId: 1,
                name: 'car //  mock data',
                descr: 'description of car is mock data',
                price: 1000,
                image: 'image of car',
                sellerId: 'John'
            },
            {
                prodId: 2,
                name: 'boat //  mock data',
                descr: 'description of boat',
                price: 2000,
                image: 'image of boat',
                sellerId: 'barb'
            },
            {
                prodId: 3,
                name: 'asdsa //  mock data',
                descr: 'dasdasdription of boat',
                price: 2000,
                image: 'idasdadt',
                sellerId: 'asdasd'
            }
        ]
        this.setState({ products: mockCart })
=======

        const mackCart = 
            [ { username: 'washy',
                productID: 98846714,
                price: 11,
                blurb: 'retro hat' },
              { username: 'manny',
                productID: 29775658,
                price: 26,
                blurb: 'beer!!' } ] 
            

            this.setState({products: mackCart})

            
>>>>>>> 8d793727da579432f7d378223717d7c95c73e2cb
    }

    renderProducts = () => {
        const { products } = this.state
        if (products) {
            return products.map(product => {
                return <Cartcard
<<<<<<< HEAD
                    // plus whatever else we get from the backend
                    name={product.name}
                    image={product.image}
                    description={product.descr}
                    sellerId={product.seller}
                    prodId={product.prodId}
                    key={product.prodId}
                    price={'$' + product.price}
                    checkout={() => this.checkout(product)}
                    deleteItem={() => this.deleteItem(product)}
=======
                // plus whatever else we get from the backend
                    username={product.username}
                    productID= {product.productID}
                    description= {product.blurb}
                    name={product.name}
                    image= {product.image}
                    sellerId= {product.seller}
                    key= {product.prodId}
                    price= {product.price}
                    checkout={()=>this.checkout(product)}
                    deleteItem={()=>this.deleteItem(product)}
>>>>>>> 8d793727da579432f7d378223717d7c95c73e2cb
                />

            })

        } else {
            return <div>cart is empty</div>
        }
    }

    //add every products.price together
    renderPrice = () => {
        const { products } = this.state
        if (products) {
            var total = 0
            for (var i = 0; i < products.length; i++) {
                total += products[i].price
            }
            return total
        }
        else {
            return <div>$0.00</div>
        }
    }

    checkout = (item) => {
        //pass username into the item with clickfunction
        item.username = this.props.username

        //pass whole item to backend to proceed to checkout
        // fetch("/checkout", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        // this.setState({products: []})// 

        //or
        //this sends back the cart products array to the backend minus the item
        //that was checked out -- to rewrite
        let newArray = this.state.products
        let productsRemoved = newArray.filter(function (el) {
            return el.name !== item.name;
        });
        this.setState({ products: productsRemoved })// 

        console.log('checkout', item);
    }
    deleteItem = (item) => {
        console.log('gleb: ', item)
        //pass username into the item with clickfunction
        item.username = this.props.username

        //need to update backend to remove an item from cart
        // fetch("/delete", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })

        let oldArray = this.state.products
        let newArray = oldArray.filter(function (x) {
            console.log('single item: ', x)
            return x.name !== item.name;
        });

<<<<<<< HEAD
       // console.log('new array =', newArray);
       // console.log('old array =', this.state.products)

        this.setState({ products: newArray })// 
       // console.log(' delete this item only =', item)

=======
        this.setState({products: newArray})// 
        
>>>>>>> 8d793727da579432f7d378223717d7c95c73e2cb
    }



    render() {
        return (
            <div className='App'>
                <div>
                    Items in cart: {this.state.products.length}
                </div>

                <div>

                    {this.renderProducts()}
                </div>
                <div>
                    {' YOUR TOTAL IS $' + this.renderPrice()}
                </div>
            </div>
        )

    }

}
