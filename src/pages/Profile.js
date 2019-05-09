import React from 'react';
import './Pages.css';

export default class Profile extends React.Component {
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Travel Dashboard</title>
          <header>
            <h3>Hello {'{'}{'{'}user.name{'}'}{'}'} </h3>
          </header>
          <p>Your Workout Class Schedules</p>
          {'{'}% for class in classes %{'}'}
          {'{'}% endfor %{'}'}
          <div className="table">
                    <table>
                        <tr className="table-heading">
                            <th>Class</th>
                            <th>Instructor</th> 
                            <th>Days</th> 
                            <th>Time</th>
                            <th>Contact</th> 
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>80</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
        </div>
      );
    }
  }
