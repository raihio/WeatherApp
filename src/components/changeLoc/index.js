import React, {h, Component} from 'react';
const https = require('https');

function getLoc() {
    return JSON.parse(document.cookie).loc;
}

export default class changeLoc extends Component{
    constructor(){
        super();
        this.getNewLoc.bind(this);
    }

    getNewLoc = () => {
        var newLoc = document.getElementById("newLoc").value;
        var link = 'https://maps.googleapis.com/maps/api/geocode/json?address=LOCHERE&key=AIzaSyBLYsybFjkL91O6t75w3PcOnBmwJLogujk';
        link = link.replace("LOCHERE", newLoc);
        fetch(link).then(results => {
            return results.json();
        }).then(data => {
            console.log(data);

        });
    };

    render(){

        var form = {
            wholeForm: {
                width: "fit-content",
                margin: "0 auto",
            },

            Elem: {
                margin: "5px",
            },

            curLoc: {
                width: "fit-content",
                margin: "20px auto",
            }
        };

        return(

            <div>
                <h3 style={form.curLoc}> Current Location: {getLoc()}</h3>
                <br/>
                <div  style={form.wholeForm}>
                    <input type={"text"} placeholder={"Enter new location"} required={true} style={form.Elem} id={"newLoc"}/>
                    <button type={"button"} onClick={this.getNewLoc}>Submit</button>
                </div>
            </div>
        )
    }
}