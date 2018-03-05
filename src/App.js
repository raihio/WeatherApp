import './style.css';
import React, { Component } from 'react';
import Header from './components/header';
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';

export default class App extends Component {

    componentWillMount() {
        this.setState({

        });
        const fa = document.createElement("script");
        fa.defer = true;
        fa.src = "https://use.fontawesome.com/releases/v5.0.6/js/all.js";
        document.head.appendChild(fa);

/*        var position = {
            latitude: "51.5287718",
            longitude: "-0.2416804",
            loc: "London, UK"
        };*/

        this.state = {
            latitude: "51.5287718",
            longitude: "-0.2416804",
            loc: "London, UK"
        };
        document.cookie = JSON.stringify(this.state);
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}
