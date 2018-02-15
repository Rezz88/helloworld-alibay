import React, { Component } from 'react';
import '../../App.css';
import ForSalePage from './views/SalePage'
import SoldItemPage from './views/SoldPage'
import HisItemPage from './views/HisPage'



export class Profile extends Component {

    constructor() {
        super();
        this.state = {
            active: "",
            products: []
        }
    }

    ChangeComponent = (component) => {
        this.setState({ active: component })
      }
 
    renderComponent = () => {
        const {active} = this.state;
        if( active === "HistoryItem") {
            return <HisItemPage/>
        } else if ( active === "SoldItem") {
            return <SoldItemPage/>
        } else if ( active === "ForSale") {
            return <ForSalePage/>
        }else {
            return <div></div>
        }
    };

    // //Will take info from backend
    renderPerson = () => {
    //     // fetch(""), {
    //     //     method: 'post',
    //     //     body: JSON.stringify({
    //     //     username: user,
    //     //     email: mail
    //     //     })
    //     // }
    //     // .then(x => x.json())
    //     // .then(console.log(x))
    return <div>User Information</div>
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
                        <a onClick={() => this.ChangeComponent("HistoryItem")}>HISTORY</a>
                    </div>
                <div>{this.renderComponent()}</div>
                {/* <div>{this.renderProducts()}</div> */}
            </div>
        );
    }
}

export default Profile;
