import React, {h, Component} from 'react';

export default class TubeUpdates extends Component{
    render(){
        return(
            <div align="center">
                <h1> Tube Updates </h1>
                <table >
                    <tr>
                        <th>Line</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>District</td>
                        <td>Severe Delays</td>
                    </tr>

                    <tr>
                        <td>Piccadilly</td>
                        <td>Minor Delays</td>
                    </tr>

                    <tr>
                        <td>Bakerloo</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Central</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Circle</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Hammersmith & City</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Jubilee</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Metropolitan</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Northern</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td >Victoria</td>
                        <td>Good Service</td>
                    </tr>

                    <tr>
                        <td>Waterloo & City</td>
                        <td>Good Service</td>
                    </tr>
                </table>
            </div>

        )
    }
}