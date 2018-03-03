import React, {h, Component} from 'react';
import styles from './styles.css';


export default class TubeUpdates extends Component{
    render(){
        return(
            <div align="center">
                <h1> Tube Updates </h1>
                <table>
                    <div id="train">
                    <tr>
                        <th>Line</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td className="District">District</td>
                        <td>Severe Delays</td>
                    </tr>

                    <tr>
                    <td className="Piccadilly">Piccadilly</td>
                        <td>Minor Delays</td>
                    </tr>

                    <tr>
                    <td className="Bakerloo">Bakerloo</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Central">Central</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Circle">Circle</td>
                        <td>Good Service</td>
                    </tr>
                    <tr>
                    <td className="DLR">DLR</td>
                        <td>Good Service</td>
                    </tr>
                    <tr>
                    <td className="Hammersmith">Hammersmith & City</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Jubilee">Jubilee</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Metropolitan">Metropolitan</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Northern">Northern</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Victoria">Victoria</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                    <td className="Waterloo">Waterloo & City</td>
                        <td>Good Service</td>
                    </tr>
                    </div>
                </table>
            </div>

        )
    }
}