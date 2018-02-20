import React, {h, Component} from 'react';
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';

function getLoc() {
    return JSON.parse(document.cookie).loc;
}

function getCurrTime() {
    var d = new Date();
    return d.getHours() + ":" + d.getMinutes();
}


export default class Header extends Component{

    render(){
        var styles = {
            topBar: {
                height: '46px',
                backgroundColor: "#dedfe0"
            },

            barText: {
                textAlign: "center",
                margin: 0,
                padding: "2px",
            },

            burger: {
                fontSize : "249%",
                padding: "5px",
                color: "#5a5a5c"
            },

            topTextArea: {
                width: "100%",
                height: "inherit",
                position: "absolute",
                top: "0px",
                right: "0px",
            }
        };

        return(
            <div style={styles.topBar}>
                <div style={styles.topTextArea}>
                    <h3 style={styles.barText}>{getLoc()}</h3>
                    <h4 style={styles.barText}>{getCurrTime()}</h4>
                </div>
                <i className="fas fa-bars" style={styles.burger}/>
            </div>
        )
    }
}
