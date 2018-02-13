import React, { Component } from 'react';
import '../../App.css';
import SoldItem from './Items-Sold'
import FavItem from './Items-Favorite'
import HistoryItem from './Items-History'


export class Profile extends Component {

    constructor() {
        super();
        this.state = {
            active: "",
            products: []
        }
    }

    renderComponent = () => {
        const {active} = this.state;
        if( active === "FavItem") {
            return <FavItem/>
        } else if ( active === "HistoryItem") {
            return <HistoryItem/>
        } else if ( active === "SoldItem") {
            return <SoldItem/>
        } else {
            return <div></div>
        }
    };

    ChangeComponent = (component) => {
        this.setState({ active: component })
      }
 

    render() {
        return (
            <div className="profile">
                Profile Page  
                    <div className="App-header">
                        <a onClick={() => this.ChangeComponent("SoldItem")}>SOLD -</a>
                        <a onClick={() => this.ChangeComponent("FavItem")}> - FAVORITE -</a>
                        <a onClick={() => this.ChangeComponent("HistoryItem")}>- HISTORY</a>
                    </div>
                <div>{this.renderComponent()}</div>
            </div>
        );
    }
}

export default Profile;



    // Currently not in use until functions are completed

    // newItem = () => {
    //     // fetch("")
    //     // .then(x => x.json())
    //     // .then(x => console.log(x))
    // };

    // soldItem = () => {
    //     fetch("")
    //     .then(x => x.json())
    //     .then(x => console.log(x))
    // };

    // forSaleItem = () => {
    //     fetch("")
    //     .then(x => x.json())
    //     .then(x => console.log(x))
    // };

    // history = () => {
    //     fetch("")
    //     .then(x => x.json())
    //     .then(x => console.log(x))
    // };
