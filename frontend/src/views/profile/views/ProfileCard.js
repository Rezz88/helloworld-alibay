import React, { Component } from 'react';
import '../../../App.css';

export class ProfileCard extends Component {


    render() {

        const { name, mail, /*edit Not used yet*/ } = this.props// De-structuring
        console.log("ProfileCard Email test -", mail)
        return (
            <div>
                <h4>Your User Info</h4>
                <div className='sold-item'>
                    <div>
                        {"Username - " + name}
                    </div>
                    <div>
                        {"E-mail - " + mail}
                    </div>
                    <div className="remove-button">
                        <button className="button" onClick={this.edit}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;