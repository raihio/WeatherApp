import React, {h, Component} from 'react';
import styles from './style.css';
export default class weeklyWeather extends Component{
    render(){
        return(
            <div className="tableWrap">
                <table>
                    <tr>
                        <td>Monday</td>
                        <td>29'C</td>
                        <td>image</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>10'C</td>
                        <td>image</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>67'C</td>
                        <td>image</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>29'C</td>
                        <td>image</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>17'C</td>
                        <td>image</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>7'C</td>
                        <td>image</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>3'C</td>
                        <td>image</td>
                    </tr>
                </table>
            </div>
        )
    }
}