import React from 'react';
import './Pages.css';

export default class DropClass extends React.Component {
    render() {
      return (
        <div className="App">
            <div className="dropclass-grid">
                <div className="heading">
                    Drop Classes
                </div>
                <div className="table">
                    <table>
                        <tr className="table-heading">
                            <th>Class</th>
                            <th>Instructor</th> 
                            <th>Days</th> 
                            <th>Time</th>
                            <th>Contact</th> 
                            <th>Drop Class</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td></td>
                            <td></td>
                            <td><button className="button">Drop Class</button></td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td></td>
                            <td></td>
                            <td><button className="button">Drop Class</button></td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>80</td>
                            <td></td>
                            <td></td>
                            <td><button className="button">Drop Class</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
      );
    }
  }
