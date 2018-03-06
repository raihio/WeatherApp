import './style.css';
import React, { Component } from 'react';
import Header from './components/header';
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';

export default class App extends Component {

    constructor(){
        super();
    }

    componentWillMount() {
        // attaches the font to the app
        const fa = document.createElement("script");
        fa.defer = true;
        fa.src = "https://use.fontawesome.com/releases/v5.0.6/js/all.js";
        document.head.appendChild(fa);

        if (document.cookie == "" || document.cookie == null) {
            // if first time going on app, location is set to London by default
            // and stored in cookies.
            this.state = {
                latitude: "51.5287718",
                longitude: "-0.2416804",
                loc: "London, UK"
            };
            document.cookie = JSON.stringify(this.state);
        }

        else {
            // loads location from cookies
            this.state = JSON.parse(document.cookie);
        }

    }

    render() {
        return (
            <div>
                {/*Renders the header*/}
                <Header title={this.state.loc}/>
            </div>
        );
    }
}
