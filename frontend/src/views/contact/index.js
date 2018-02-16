import React, { Component } from 'react';
import '../../App.css';
// import ContactCard from './contactCard';



export class Contact extends Component {

render ()   {
    return (
            <div className='App'>
                <div >
                    <a>CONTACT INFO</a>
                </div>
                <div >
                    <a>customer service: 1800-555-7890</a>
                </div>
                <div >
                    <a>sales: 1800-555-1234</a>
                </div>
                <div >
                    <a>Nerf gun maintenance: 1800-555-nerf</a>
                </div>
            </div>
            )
    }
}