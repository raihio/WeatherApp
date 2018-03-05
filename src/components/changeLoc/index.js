import React, {h, Component} from 'react';
import styles from './style.css';

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
        if (newLoc == "") {
            document.getElementById("responseMess").innerText = "Error: Enter a Location";
            document.getElementById("responseMess").style.color = "#f44242";
            document.getElementById("responseMess").style.visibility = "unset";
        }
        else {
            newLoc = newLoc + " UK";
            var link = 'https://maps.googleapis.com/maps/api/geocode/json?address=LOCHERE&key=AIzaSyBLYsybFjkL91O6t75w3PcOnBmwJLogujk';
            link = link.replace("LOCHERE", newLoc);
            fetch(link).then(results => {
                return results.json();
            }).then(data => {
                if (data.status == "OK") {
                    console.log(data);
                    document.getElementById("responseMess").innerText = "Location Changed";
                    document.getElementById("responseMess").style.color = "#3bce5a";
                    document.getElementById("responseMess").style.visibility = "unset";
                }
                else {
                    document.getElementById("responseMess").innerText = "Error: Invalid Location";
                    document.getElementById("responseMess").style.color = "#f44242";
                    document.getElementById("responseMess").style.visibility = "unset";
                }
            });
        }
    };

    render(){
        return(
            <div>
                <h3 className="curLoc"> Current Location: {getLoc()}</h3>
                <br/>
                <div  className="wholeForm">
                    <input type={"text"} placeholder={"Enter new location"} required={true} className="Elem" id={"newLoc"}/>
                    <button type={"button"} onClick={this.getNewLoc} className="btn">Submit</button>
                    <h3 id="responseMess"> </h3>
                </div>
            </div>
        )
    }
}