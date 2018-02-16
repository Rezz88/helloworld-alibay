import React, { Component } from 'react';
import '../../../App.css';

export class ProfileCard extends Component {
    

    render() {
        const{ name, mail } = this.props// De-tructuring
        return (
            <div>
                <h3>Items Sold</h3>
            <div className='sold-item'>
                <div>
                    {name}
                </div>
                <div>
                    {mail}
                </div>
            </div>
            </div>
        )
    }
} 

export default ProfileCard;