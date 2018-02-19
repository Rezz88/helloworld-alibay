import React, { Component } from 'react';
import '../../App.css';
import '../../grid.css';
import ForSalePage from './views/SalePage'
import SoldItemPage from './views/SoldPage'
import HisItemPage from './views/HisPage'
import ProfileCard from './views/ProfileCard'


//Parent App.js
//Child ProfileCard.js
export class Profile extends Component {

    constructor() {
        super();
        this.state = {
            active: "",
            products: [],
            username: "",
            profile: {}
        }
    };

    componentWillMount() {
        this.setState({ username: this.props.username });
    };

    componentDidMount() {
        console.log("Profile Index -", this.state.username)
        fetch("/profile", {
            method: 'post',
            body: JSON.stringify({ username: this.state.username })
        })
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(user => this.setState({ profile: [user] }))
    };

    ChangeComponent = (component) => {
        this.setState({ active: component })
    };

    renderProfile = () => {
        const { profile } = this.state
        if (profile.length) {
            return profile.map(info => {
                return <ProfileCard
                    username={info.username}
                    mail={info.email}
                    shipping={info.shippingAddress}
                    edit={this.editProfile}
                    componentDidMount={this.componentDidMount}
                />
            })
        } else {
            return <h4>User Info</h4>
        }
    };

    renderComponent = () => {
        const { active } = this.state;
        if (active === "HistoryItem") {
            return <HisItemPage username={this.state.username} />
        } else if (active === "SoldItem") {
            return <SoldItemPage username={this.state.username} />
        } else if (active === "ForSale") {
            return <ForSalePage username={this.state.username} />
        } else {
            return <div></div>
        }
    };

    render() {
        return (
            <div className="profile">
                <h4 className='App'>Profile Page</h4>
                <div>
                    {this.renderProfile()}
                </div>
                <div className="App-header">
                    <a className="flash" onClick={() => this.ChangeComponent("ForSale")}>FOR SALE</a>
                    <a className="flash" onClick={() => this.ChangeComponent("SoldItem")}>SOLD</a>
                    <a className="flash" onClick={() => this.ChangeComponent("HistoryItem")}>HISTORY</a>
                </div>
                <div>{this.renderComponent()}</div>
                {/* <div>{this.renderProducts()}</div> */}
            </div>
        );
    }
}

export default Profile;
