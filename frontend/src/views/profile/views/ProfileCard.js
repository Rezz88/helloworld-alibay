import React, { Component } from 'react';
import '../../../App.css';
import '../../../grid.css';

export class ProfileCard extends Component {
    constructor()   {
        super();
        this.state = {
            editing: false,
            edited: false,
            shipping: {},
            profile: {},
            newProfile: {
                address:    {
                    streetAddress: '',
                    city: '',
                    stateProvice: '',
                    postalCode: ''
                }
            },
        }
    }
    componentWillMount()    {
        this.setState({ username: this.props.username });
        this.setState({ shipping: this.props.shipping});
    }

    componentDidMount() {
        fetch("/profile", {
            method: 'post',
            body: JSON.stringify({ username: this.state.username })
        })
    }

    editRender = () =>    {
        this.setState({editing: true})
    }

    setInputValue =(key, value)=> {
        var newProfileTemp = this.state.newProfile
        newProfileTemp.address[key] = value
        this.setState({newProfile: newProfileTemp})
      }

    saveProfile= (item) =>  {
        
        item.username = this.props.username
        console.log(item)
        fetch('/editProfile', {
            method: 'post',
            body: JSON.stringify(item)
        })

        this.setState({editing: false})
        this.setState({edited: true})
    }


    backToMain = () => {
        this.setState({edited: false})
    }

    render() {

        const { username, mail, shipping /*edit Not used yet*/ } = this.props// De-structuring
        const { streetAddress , city, stateProvice, postalCode} = this.state.newProfile
        console.log("ProfileCard Email test -", mail)
        if (this.state.edited === true && this.state.editing === false)
        return(
            <div>
                <h4 className='App'>Your User Info</h4>
                <div className='sold-item'>
                    YOUR CHANGES HAVE BEEN SAVED
                    <div className="remove-button">
                        <button className="button" onClick={()=>this.backToMain()}>SAVE</button>
                    </div>
                </div>
            </div>
    
    )
        if (shipping !== undefined && this.state.editing === false && this.state.edited===false)   {
            return (
                <div>
                    <h4 className='App'>Your User Info</h4>
                    <div     className='sold-item'>
                        <div>
                            {"Username - " + username}
                        </div>
                        <div>
                            {"E-mail - " + mail}
                        </div>
                        <div> - S H I P P I N G - </div>
                        <div>
                            {"street address - " + shipping.streetAddress }
                        </div>
                        <div>
                            {"city - " + shipping.city }
                        </div>
                        <div>
                            {"State/Province - " + shipping.stateProvice }
                        </div>
                        <div>
                            {"Zip code - " + shipping.postalCode }
                        </div>
                        <div className="remove-button">
                            <button className="button" onClick={this.editRender}>Edit</button>
                        </div>
                    </div>
                </div>
            )
        } 
        if (this.state.editing === true && this.state.edited === false)
        return(
            <div>
                <h4 className='App'>Your User Info</h4>
                <div className='sold-item'>
                    <div>edit name</div>
                    <div>
                    {/* <input placeholder={name}/> */}
                    </div>
                    <div>edit mail</div>
                    <div>
                    {/* <input placeholder={mail}/> */}
                    </div>
                    <div> - S H I P P I N G - </div>
                    <div>edit street address</div>
                    <div>
                    <input placeholder={shipping.streetAddress} value={streetAddress} onChange={(e)=> this.setInputValue('streetAddress', e.target.value)} />
                    </div>
                    <div>edit city</div>
                    <div>
                    <input placeholder={shipping.city} value={city} onChange={(e)=> this.setInputValue('city', e.target.value)}/>
                    </div>
                    <div>edit state/province</div>
                    <div>
                    <input placeholder={shipping.stateProvice} value={stateProvice} onChange={(e)=> this.setInputValue('stateProvice', e.target.value)} />
                    </div>
                    <div>edit zip code</div>
                    <div>
                    <input placeholder={shipping.postalCode} value={postalCode} onChange={(e)=> this.setInputValue('postalCode', e.target.value)} />
                    </div>
                    <div className="remove-button">
                        <button className="button" onClick={()=>this.saveProfile(this.state.newProfile)}>SAVE</button>
                    </div>
                </div>
            </div>
    
    )
    
    }
}

export default ProfileCard;
