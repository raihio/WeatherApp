import React, {h, Component} from 'react';
import styles from './styles.css';


export default class TubeUpdates extends Component{

    constructor() {
        super();
        this.state = {
            bakerloo: '',
            central: '',
            circle: '',
            district: '',
            dlr: '',
            hammersmith: '',
            jubilee: '',
            metropolitan: '',
            northern: '',
            piccadilly: '',
            victoria: '',
            waterloo: '',
        }
    }
    componentWillMount() {
        this.forceUpdate();
        let datProm = fetch('https://api.tfl.gov.uk/line/mode/tube%2C%20dlr/status?app_id=a9fae4b0&app_key=67f3c6d181cd35084ab2d1e9ce6065a6').then(function(response) {
            return response.json();
        });


        datProm.then(data => {
            this.setState({
                bakerloo:data["0"].lineStatuses["0"].statusSeverityDescription,
                central:data["1"].lineStatuses["0"].statusSeverityDescription,
                circle:data["2"].lineStatuses["0"].statusSeverityDescription,
                district:data["3"].lineStatuses["0"].statusSeverityDescription,
                dlr:data["4"].lineStatuses["0"].statusSeverityDescription,
                hammersmith:data["5"].lineStatuses["0"].statusSeverityDescription,
                jubilee:data["6"].lineStatuses["0"].statusSeverityDescription,
                metropolitan:data["7"].lineStatuses["0"].statusSeverityDescription,
                northern:data["8"].lineStatuses["0"].statusSeverityDescription,
                piccadilly:data["9"].lineStatuses["0"].statusSeverityDescription,
                victoria:data["10"].lineStatuses["0"].statusSeverityDescription,
                waterloo:data["11"].lineStatuses["0"].statusSeverityDescription,
            });
        });

    }

    render(){
        return(
            <div align="center" id="siraj">
                <h1> Tube Updates </h1>
                <table>
                    <div id="train">
                    <tr>
                        <th>Line</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td className="District">District</td>
                        <td>{this.state.district}</td>
                    </tr>

                    <tr>
                    <td className="Piccadilly">Piccadilly</td>
                        <td>{this.state.piccadilly}</td>
                    </tr>

                    <tr>
                    <td className="Bakerloo">Bakerloo</td>
                        <td>{this.state.bakerloo}</td>
                    </tr>

                    <tr>
                    <td className="Central">Central</td>
                        <td>{this.state.central}</td>
                    </tr>

                    <tr>
                    <td className="Circle">Circle</td>
                        <td>{this.state.circle}</td>
                    </tr>
                    <tr>
                    <td className="DLR">DLR</td>
                        <td>{this.state.dlr}</td>
                    </tr>
                    <tr>
                    <td className="Hammersmith">Hammersmith & City</td>
                        <td>{this.state.hammersmith}</td>
                    </tr>

                    <tr>
                    <td className="Jubilee">Jubilee</td>
                        <td>{this.state.jubilee}</td>
                    </tr>

                    <tr>
                    <td className="Metropolitan">Metropolitan</td>
                        <td>{this.state.metropolitan}</td>
                    </tr>

                    <tr>
                    <td className="Northern">Northern</td>
                        <td>{this.state.northern}</td>
                    </tr>

                    <tr>
                    <td className="Victoria">Victoria</td>
                        <td>{this.state.victoria}</td>
                    </tr>

                    <tr>
                    <td className="Waterloo">Waterloo & City</td>
                        <td>{this.state.waterloo}</td>
                    </tr>
                    </div>
                </table>
            </div>

        )
    }
}