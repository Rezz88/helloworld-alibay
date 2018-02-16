import React, { Component } from 'react';
import '../../../App.css';

export class ProfileCard extends Component {
    

    render() {
        
        const{ name, mail } = this.props// De-tructuring
        console.log(mail)
        return (
            <div>
                <h4>Your User Info</h4>
            <div className='sold-item'>
                <div>
                    {"Username - " + name}
                </div>
                <div>
                    {"E-mail - " + mail}
                    {console.log(mail)}
                </div>
            </div>
            </div>
        )
    }
} 

export default ProfileCard;