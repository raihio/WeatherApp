import React, {h, Component} from 'react';
import styles from './style.css';

function getLoc() {
    // Gets the current location stored in cookies
    return JSON.parse(document.cookie).loc;
}

export default class changeLoc extends Component{
    constructor(props){
        super(props);
        // Binds a method so ti can be used
        this.getNewLoc.bind(this);
    }

    componentWillMount() {
        this.forceUpdate();
    }

    getNewLoc = () => { // This function runs when the Submit button is pressed
        var newLoc = document.getElementById("newLoc").value;
        // Uses the DOM to get the String entered in the text box
        if (newLoc == "") {
            // if new location was not entered, error message will show
            document.getElementById("responseMess").innerText = "Error: Enter a Location";
            document.getElementById("responseMess").style.color = "#f44242";
            document.getElementById("responseMess").style.visibility = "unset";
        }
        else {
            newLoc = newLoc + " UK"; // Makes sure we get the UK version of the location
            var link = 'https://maps.googleapis.com/maps/api/geocode/json?address=LOCHERE&key=AIzaSyBLYsybFjkL91O6t75w3PcOnBmwJLogujk';
            link = link.replace("LOCHERE", newLoc);
            fetch(link).then(results => {
                //We use the Google Geocode API to convert the location name to longitude and latitude
                return results.json();
            }).then(data => {
                if (data.status == "OK") {
                    // if location was valid, new location is added to state and cookies
                    var newLoc = data.results["0"].address_components["0"].short_name;
                    var newLong = data.results["0"].geometry.location.lng;
                    var newLat = data.results["0"].geometry.location.lat;
                    var cookie = JSON.parse(document.cookie);
                    cookie.loc = newLoc;
                    cookie.longitude = newLong;
                    cookie.latitude = newLat;
                    document.cookie = JSON.stringify(cookie);
                    // A message is then shown to let the user know location was successfully changed
                    document.getElementById("responseMess").innerText = "Location Changed";
                    document.getElementById("responseMess").style.color = "#f8f8ff";
                    document.getElementById("responseMess").style.visibility = "unset";
                    // Reloads the window so data is refreshed for new location
                    window.location.reload();

                }
                else {
                    // if API could not find location, error message shows
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
                <h3 className="curLoc"> Current Location: </h3>
                <h3 className="curLoc"> {getLoc()} </h3>
                <br/>
                <div  className="wholeForm">
                    {/* Form for entering new location
                    * Includes a text box and a submit button
                    * */}
                    <input type={"text"} placeholder={"Enter new location"} required={true} className="Elem" id={"newLoc"}/>
                    <button type={"button"} onClick={this.getNewLoc} className="btn">Submit</button>
                    <h3 id="responseMess"> </h3>
                </div>
            </div>
        )
    }
}