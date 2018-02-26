import './style.css';
import React, { Component } from 'react';
import Header from './components/header';
import ChangeLoc from './components/changeLoc';
import Main from './components/mainPage';
import {Route} from "react-router-dom";
import Router from "react-router-dom/es/Router";
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';

function setInitialLocation() {
    var position = {
        latitude: "51.5287718",
        longitude: "-0.2416804",
        loc: "London"
    };
    //DarkSkyApi.loadCurrent(position).then(result => {
    //    console.log(result);
    //});

    document.cookie = JSON.stringify(position);
    //console.log(document.cookie);
    //console.log(JSON.parse(document.cookie));
}
//http://darkskyapp.github.io/skycons/
export default class App extends Component {

    componentWillMount() { // dont touch this
        const fa = document.createElement("script");
        fa.defer = true;
        fa.src = "https://use.fontawesome.com/releases/v5.0.6/js/all.js";
        document.head.appendChild(fa);
    }

    render() {
        return (
            <div onLoad={setInitialLocation()}>
                <Header/>
            </div>
        );
    }
}
