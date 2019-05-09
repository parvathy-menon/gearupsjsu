import React from 'react';
import './Pages.css';

export default class LoginHome extends React.Component {
    render() {
      return (
        <div className="App">
            <div className="login-home-grid">
                <div className="heading">
                    Your classes
                </div>
                <div className="table home-table">
                    <table>
                        <tr className="table-heading">
                            <th>Class</th>
                            <th>Instructor</th> 
                            <th>Days</th> 
                            <th>Time</th>
                            <th>Contact</th> 
                        </tr>
                        <tr>
                            <td>Yoga</td>
                            <td>Jill Smith</td>
                            <td>50</td>
                            <td>MW 09:00 - 10:00</td>
                            <td>jill.smith@gearup.com</td>
                        </tr>
                        <tr>
                            <td>Yoga</td>
                            <td>Kevin Tracy</td>
                            <td>50</td>
                            <td>TR 14:00 - 15:00</td>
                            <td>kevin.tracy@gearup.com</td>
                        </tr>
                        <tr>
                            <td>Aerobics</td>
                            <td>Carl Henson</td>
                            <td>30</td>
                            <td>TR 10:00 - 11:00</td>
                            <td>carl.henson@gearup.com</td>
                        </tr>
                        <tr>
                            <td>Pilates</td>
                            <td>Janiah Bullock</td>
                            <td>30</td>
                            <td>FR 11:00 - 13:00</td>
                            <td>janiah.bullock@gearup.com</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
      );
    }
  }
