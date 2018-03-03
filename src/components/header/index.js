import React, {h, Component} from 'react';
import s from './styles.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import mainPage from "../mainPage";
import changeLoc from "../changeLoc";
import weekly from '../weeklyWeather';
import tubeUpdates from '../tubeUpdates';

const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';


function getLoc() {
    return JSON.parse(document.cookie).loc;
}

function getCurrTime() {
    var d = new Date();
    var h = d.getUTCHours();
    var min = d.getUTCMinutes();
    if (min < 10) min = "0" + min;
    return h + ":" + min;
}


export default class Header extends Component{

    constructor() {
        super();
    }

    render(){

        function openMenu(e) {
            e.preventDefault();
            document.getElementById("sideNav").style.width = "250px";
        }

        function closeMenu(e) {
            e.preventDefault();
            document.getElementById("sideNav").style.width = "0px";
        }

        return(
            <Router>
                <div>
                    <div className="topBar">
                        <div className="topTextArea">
                            <h3 className="barText">{getLoc()}</h3>
                            <h4 className="barText">{getCurrTime()}</h4>
                        </div>
                        <div onClick={openMenu} className="burgerDiv"><i className="fas fa-bars" id="burger" onClick={openMenu}/></div>
                        <div className="sideNav" id={"sideNav"}>
                            <a href={"javascript:void(0)"} className="sideNavCloseBtn" onClick={closeMenu}> <i class="fas fa-times"/> </a>
                            <div onClick={closeMenu}>
                                <Link to="/" className="menuItem">Home</Link>
                                <Link to="/weekly" className="menuItem">Weekly Weather</Link>
                                <Link to="/travel" className="menuItem">Travel Status</Link>
                                <Link to="/changeLoc" className="menuItem">Change Location</Link>
                            </div>
                        </div>
                    </div>
                    <div className="bodyStuff">
                        <Route exact path="/" component={mainPage}/>
                        <Route path="/changeLoc" component={changeLoc}/>
                        <Route path="/weekly" component={weekly}/>
                        <Route path="/travel" component={tubeUpdates}/>
                    </div>
                </div>
            </Router>
        )
    }
}