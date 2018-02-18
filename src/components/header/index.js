import React, {h, Component} from 'react';

export default class Header extends Component{
    render(){
        var styles = {
            topBar: {
                height: '45px',
                backgroundColor: "#dedfe0"
            },

            barText: {
                width: "50px",
                position: "absolute",
                left: "30%"
            },

            burger: {
                fontSize : "249%",
                padding: "5px",
                color: "#5a5a5c"
            },

            mainContent: {
                backgroundColor: "#adaeaf",
            }
        };

        return(
            <div>
                <div style={styles.topBar}>
                    <p style={styles.barText}>Location/CurrentWeather</p>
                    <i className="fas fa-bars" style={styles.burger}/>
                </div>
                <div style={styles.mainContent}>
                    <p>hello text</p>

                </div>
            </div>

        )
    }
}
