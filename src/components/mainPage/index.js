import React, {h, Component} from 'react';
import styles from './style.css';
import Skycons from 'react-skycons'

const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';

export default class mainPage extends Component{

    constructor(){
        super();
        this.state = {
            mainIcon: '',
            mainFaren: '',
            mainCels: '',
            two: '',
            four: '',
            six: '',
            eight: '',
            ten: '',
            twelve: '',
        };
    }

    static convertTime(timestamp) {
        var date = new Date(timestamp*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    }

    componentWillMount(){
        let data = DarkSkyApi.loadItAll('daily,alerts,minutely,flags', JSON.parse(document.cookie))
            .then(result => {
                return result;
            });

        data.then(result => {
            this.setState({
                mainIcon: result.currently.icon.toUpperCase().replace('-', '_').replace('-', '_'),
                currentFaren: parseInt(result.currently.temperature),
                currentCels: parseInt(((result.currently.temperature - 32) * 0.556).toString())
            });


            this.setState({
                mainFaren: parseInt(result.currently.temperature),
                mainCels: parseInt(((result.currently.temperature - 32) * 0.556).toString()),
            });

            var hourly = result.hourly.data;
            this.setState({
                two: {
                    time: mainPage.convertTime(hourly[2]["time"]),
                    temp: parseInt(((hourly[2]["temperature"] - 32) * 0.556).toString()) + "°C",
                    icon: hourly[2]["icon"].toUpperCase().replace('-', '_').replace('-', '_'),
                },

                four: {
                    time: mainPage.convertTime(hourly[4]["time"]),
                    temp: parseInt(((hourly[4]["temperature"] - 32) * 0.556).toString()) + "°C",
                    icon: hourly[4]["icon"].toUpperCase().replace('-', '_').replace('-', '_'),
                },

                six: {
                    time: mainPage.convertTime(hourly[6]["time"]),
                    temp: parseInt(((hourly[6]["temperature"] - 32) * 0.556).toString()) + "°C",
                    icon: hourly[6]["icon"].toUpperCase().replace('-', '_').replace('-', '_'),
                },

                eight: {
                    time: mainPage.convertTime(hourly[8]["time"]),
                    temp: parseInt(((hourly[8]["temperature"] - 32) * 0.556).toString()) + "°C",
                    icon: hourly[8]["icon"].toUpperCase().replace('-', '_').replace('-', '_'),
                },

                ten: {
                    time: mainPage.convertTime(hourly[10]["time"]),
                    temp: parseInt(((hourly[10]["temperature"] - 32) * 0.556).toString()) + "°C",
                    icon: hourly[10]["icon"].toUpperCase().replace('-', '_').replace('-', '_'),
                },

                twelve: {
                    time: mainPage.convertTime(hourly[12]["time"]),
                    temp: parseInt(((hourly[12]["temperature"] - 32) * 0.556).toString()) + "°C",
                    icon: hourly[12]["icon"].toUpperCase().replace('-', '_').replace('-', '_'),
                },
            });
            console.log(this.state);
        })
    }

    render(){
        return(
            <div className="mainDiv">
                <div id={"current"}>
                    <Skycons
                        color='#e8e8e8'
                        icon={this.state.mainIcon}
                        autoplay={true}
                    />
                        <div id="celsDiv"><h1>{this.state.mainCels}°C | </h1></div>
                        <div id="farenDiv"><h1>{this.state.mainFaren}°F</h1></div>
                </div>
                <div id="tableWrapper">
                    <hr/>
                    <table>
                        <tr>
                            <th className="title">Time</th>
                            <th className="title">Temperature</th>
                            <th className="title">Atmosphere</th>
                            </tr>
                        <tr>
                            <td>{this.state.two.time}</td>
                            <td>{this.state.two.temp}</td>
                            <td><Skycons color='#e8e8e8' icon={this.state.two.icon} autoplay={true}/></td>
                        </tr>
                        <tr>
                            <td>{this.state.four.time}</td>
                            <td>{this.state.four.temp}</td>
                            <td><Skycons color='#e8e8e8' icon={this.state.four.icon} autoplay={true}/></td>
                        </tr>
                        <tr>
                            <td>{this.state.six.time}</td>
                            <td>{this.state.six.temp}</td>
                            <td><Skycons color='#e8e8e8' icon={this.state.six.icon} autoplay={true}/></td>
                        </tr>
                        <tr>
                            <td>{this.state.eight.time}</td>
                            <td>{this.state.eight.temp}</td>
                            <td><Skycons color='#e8e8e8' icon={this.state.eight.icon} autoplay={true}/></td>
                        </tr>
                        <tr>
                            <td>{this.state.ten.time}</td>
                            <td>{this.state.ten.temp}</td>
                            <td><Skycons color='#e8e8e8' icon={this.state.ten.icon} autoplay={true}/></td>
                        </tr>
                        <tr>
                            <td>{this.state.twelve.time}</td>
                            <td>{this.state.twelve.temp}</td>
                            <td><Skycons color='#e8e8e8' icon={this.state.twelve.icon} autoplay={true}/></td>
                        </tr>
                    </table>
                </div>
            </div>

        )
    }
}

