import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import axios from './component/utils/axios';
// import App from './App';


//mport App from './App';
import RootRoute from './router';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
Component.prototype.$axios=axios
ReactDOM.render(<RootRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
