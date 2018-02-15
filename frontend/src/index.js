import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter} from 'react-router-dom'     ///new line install the npm
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
