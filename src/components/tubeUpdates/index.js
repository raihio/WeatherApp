import React, {h, Component} from 'react';

export default class TubeUpdates extends Component{
    render(){
        var styles={
            a:{
                fontSize : "167%",
                border : "3px solid grey",
                borderCollapse : "collapse",
                width : "56%",
            },

            b : {
                fontSize : "167",
                border : "1px solid black"
            }
        };


        return(
            <div align="center">
                <h1> TFL Weather Updates</h1>
                <table style={styles.a}>
                    <tr style={styles.b} >

                        <th style={styles.b} align = "center"> Line </th>
                        <th>  Status </th>

                    </tr>


                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> District </td>
                        <td align = "center"> Severe Delays  </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Piccadilly </td>
                        <td align = "center"> Minor Delays </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Bakerloo </td>
                        <td align = "center"> Good Service</td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Central </td>
                        <td align = "center"> Good Service</td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Circle </td>
                        <td align = "center" > Good Service </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Hammersmith & City </td>
                        <td align = "center"> Good Service </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Jubilee </td>
                        <td align = "center"> Good Service </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Metropolitian </td>
                        <td align = "center"> Good Service </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Northern </td>
                        <td align = "center"> Good Service </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center"> Victoria </td>
                        <td align = "center" > Severe Delays </td>
                    </tr>

                    <tr style={styles.b}>
                        <td style={styles.b} align = "center" > Waterloo & City </td>
                        <td align = "center"> Severe Delays </td>
                    </tr>
                </table>
            </div>

        )
    }
}