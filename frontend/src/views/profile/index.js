import React, { Component } from 'react';
import '../../App.css';
import ForSale from './views/Items-ForSale'
import SoldItem from './views/Items-Sold'
import FavItem from './views/Items-Favorite'
import HistoryItem from './views/Items-History'


export class Profile extends Component {

    constructor() {
        super();
        this.state = {
            active: "",
            products: []
        }
    }

    //Temp mockdata for testing
    componentDidMount(){
        const mockproducts = [
            {prodid: 1,
                name: 'car',
                descr: 'description of car',
                image: 'img of car'},
            {prodid: 2,
                name: 'boat',
                descr: 'description of boat',
                image: 'img of boat'},
            {prodid: 3,
                name: 'shoes',
                descr: 'description of shoes',
                image: 'img of shoes'}
        ]
        this.setState({ products: mockproducts })
    };

    renderProducts = () => {
        const { products } = this.state
        if (products.length) {
            return products.map(product => {
                return <ForSale
                    name={product.name}
                    image={product.image}
                    description={product.descr}
                    prodId={product.prodId}
                    key={product.prodId}
                    // Currently not required for profile
                    // addToBag={this.addToBag}
                    // addToFav={() => this.addToFav(product.prodid)}
                />
            })
        } else {
            return <div>Nothing</div>
        }
    }

    //Will take info from backend
    renderPerson = () => {
        // fetch(""), {
        //     method: 'post',
        //     body: JSON.stringify({
        //     username: user,
        //     email: mail
        //     })
        // }
        // .then(x => x.json())
        // .then(console.log(x))
    return <div>User Information</div>
    }

    renderComponent = () => {
        const {active} = this.state;
        if( active === "FavItem") {
            return <FavItem/>
        } else if ( active === "HistoryItem") {
            return <HistoryItem/>
        } else if ( active === "SoldItem") {
            return <SoldItem/>
        } else if ( active === "ForSale") {
            return <ForSale/>
        }else {
            return <div></div>
        }
    };

    // displaySale = () => {
    //     if (active = "ForSale") {
    //         return 
    //     }
    // }

    ChangeComponent = (component) => {
        this.setState({ active: component })
      }
 
    render() {
        return (
            <div className="profile">
                <div>
                    Profile Page  
                    {this.renderPerson()}
                    <button onClick={this.editProfile}>Edit</button>
                </div>
                    <div className="App-header">
                        <a onClick={() => this.ChangeComponent("ForSale")}>FOR SALE</a>
                        <a onClick={() => this.ChangeComponent("SoldItem")}>SOLD</a>
                        <a onClick={() => this.ChangeComponent("FavItem")}>FAVORITE</a>
                        <a onClick={() => this.ChangeComponent("HistoryItem")}>HISTORY</a>
                    </div>
                <div>{this.renderComponent()}</div>
                <div>{this.renderProducts()}</div>
            </div>
        );
    }
}

export default Profile;
