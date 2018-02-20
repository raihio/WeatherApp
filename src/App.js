import './style.css';
import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/mainPage';
export default class App extends Component {

    componentWillMount() { // dont touch this
        const fa = document.createElement("script");
        fa.defer = true;
        fa.src = "https://use.fontawesome.com/releases/v5.0.6/js/all.js";
        document.head.appendChild(fa);
    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}
