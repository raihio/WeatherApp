import React, {h, Component} from 'react';
import styles from './style.css';
import Skycons from 'react-skycons'
const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = 'a1057f9d5a5dbee71c1c7993eb8aa799';



export default class weeklyWeather extends Component{

    constructor(){
        super();
        this.state = {
            // one state for each day of the week, looking 7 days ahead
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: ''
        };
    }

    static convertToDay(timestamp) {
        const d = new Date(timestamp * 1000);
        var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        var num = d.getDay();
        console.log(num);
        return days[num];

    }
    componentWillMount() {

        let data = DarkSkyApi.loadItAll('hourly,alerts,minutely,flags', JSON.parse(document.cookie)).then(result => {
            return result;
        });

        data.then(result => {
            var daily = result.daily.data;
            console.log(daily);
            this.setState({
                one: {
                    day: weeklyWeather.convertToDay(daily["1"].time),
                    temp: parseInt(((daily["1"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["1"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["1"].summary,
                },
                two: {
                    day: weeklyWeather.convertToDay(daily["2"].time),
                    temp: parseInt(((daily["2"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["2"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["2"].summary,
                },
                three: {
                    day: weeklyWeather.convertToDay(daily["3"].time),
                    temp: parseInt(((daily["3"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["3"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["3"].summary,
                },
                four: {
                    day: weeklyWeather.convertToDay(daily["4"].time),
                    temp: parseInt(((daily["4"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["4"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["4"].summary,
                },
                five: {
                    day: weeklyWeather.convertToDay(daily["5"].time),
                    temp: parseInt(((daily["5"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["5"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["5"].summary,
                },
                six: {
                    day: weeklyWeather.convertToDay(daily["6"].time),
                    temp: parseInt(((daily["6"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["6"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["6"].summary,
                },
                seven: {
                    day: weeklyWeather.convertToDay(daily["7"].time),
                    temp: parseInt(((daily["7"].temperatureLow - 32) * 0.556).toString()) + "°C",
                    icon: daily["7"].icon.toUpperCase().replace('-', '_').replace('-', '_'),
                    summary: daily["7"].summary,
                },
            });
            console.log(this.state);
        })
    }

    render(){
        return(
            <div className="tableWrap">
                <table>
                    <tr>
                        <td className="cell">Day</td>
                        <td className="cell">Tmperature</td>
                        <td className="cell">Atmosphere</td>
                        <td className="cell">Render</td>
                        </tr>
                    <tr>
                        <td className="cell">{this.state.one.day}</td>
                        <td className="cell">{this.state.one.temp}</td>
                        <td className="cell">{this.state.one.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.one.icon} autoplay={true}/></td>
                    </tr>
                    <tr>
                        <td className="cell">{this.state.two.day}</td>
                        <td className="cell">{this.state.two.temp}</td>
                        <td className="cell">{this.state.two.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.two.icon} autoplay={true}/></td>
                    </tr>
                    <tr>
                        <td className="cell">{this.state.three.day}</td>
                        <td className="cell">{this.state.three.temp}</td>
                        <td className="cell">{this.state.three.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.three.icon} autoplay={true}/></td>
                    </tr>
                    <tr>
                        <td className="cell">{this.state.four.day}</td>
                        <td className="cell">{this.state.four.temp}</td>
                        <td className="cell">{this.state.four.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.four.icon} autoplay={true}/></td>
                    </tr>
                    <tr>
                        <td className="cell">{this.state.five.day}</td>
                        <td className="cell">{this.state.five.temp}</td>
                        <td className="cell">{this.state.five.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.five.icon} autoplay={true}/></td>
                    </tr>
                    <tr>
                        <td className="cell">{this.state.six.day}</td>
                        <td className="cell">{this.state.six.temp}</td>
                        <td className="cell">{this.state.six.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.six.icon} autoplay={true}/></td>
                    </tr>
                    <tr>
                        <td className="cell">{this.state.seven.day}</td>
                        <td className="cell">{this.state.seven.temp}</td>
                        <td className="cell">{this.state.seven.summary}</td>
                        <td className="imageCell"><Skycons color='black' icon={this.state.seven.icon} autoplay={true}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}