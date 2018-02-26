import React, {h, Component} from 'react';
import s from './styles.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import mainPage from "../mainPage";
import changeLoc from "../changeLoc";
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


    render(){
        var topBarStyles = {
            topBar: {
                height: "10%",
                backgroundColor: "#dedfe0"
            },

            barText: {
                textAlign: "center",
                margin: 0,
                padding: "2px",
            },

            burgerDiv: {
                width: "40.5px",
                position: "relative",
            },

            burger: {
                fontSize : "249%",
                padding: "5px",
                color: "rgba(0, 0, 0, 0.85)",
                cursor: "pointer",
            },

            topTextArea: {
                width: "100%",
                height: "inherit",
                position: "absolute",
                top: "0px",
                right: "0px",
            },

        };

        var side = {
            sideNav: {
                height: "100%",
                width: "0",
                position: "fixed",
                zIndex: "1",
                top: "0",
                left: "0",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                overflow: "hidden",
                transition: "0.5s",
                paddingTop: "60px",
            },

            sideNavCloseBtn: {
                position: "absolute",
                color: "rgba(216, 216, 216, 0.35)",
                top: "3px",
                right: "15px",
                fontSize: "36px",
                marginLeft: "50px",
            },
        };


        var main = {
            body: {
                position:"absolute",
                height: "80%",
                width: "-webkit-fill-available",
                padding: "5%"
            }
        };


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
                    <div style={topBarStyles.topBar}>
                        <div style={topBarStyles.topTextArea}>
                            <h3 style={topBarStyles.barText}>{getLoc()}</h3>
                            <h4 style={topBarStyles.barText}>{getCurrTime()}</h4>
                        </div>
                        <div style={topBarStyles.burgerDiv} onClick={openMenu} ><i className="fas fa-bars" style={topBarStyles.burger} onClick={openMenu}/></div>
                        <div style={side.sideNav} id={"sideNav"}>
                            <a href={"javascript:void(0)"} style={side.sideNavCloseBtn} onClick={closeMenu}> <i class="fas fa-times"/> </a>
                            <div onClick={closeMenu}>
                                <Link to="/" className="menuItem">Home</Link>
                                <Link to="" className="menuItem">Weekly Weather</Link>
                                <Link to="" className="menuItem">Travel Status</Link>
                                <Link to="/changeLoc" className="menuItem">Change Location</Link>
                            </div>
                        </div>
                    </div>
                    <div style={main.body}>
                        <Route exact path="/" component={mainPage}/>
                        <Route path="/changeLoc" component={changeLoc}/>
                    </div>
                </div>
            </Router>


        )
    }

}
