import React from 'react';
import './Pages.css';

export default class AddClass extends React.Component {
    render() {
      return (
        <div className="App">
            <div className="addclass-grid">
                <div className="heading">
                    Add Classes
                </div>
                <div className="class-search"> 
                    <div id="cover">
                        <form method="get" action="">
                            <div className="search-tb">
                                <div className="search-td"><input type="text" placeholder="Search Class" required/></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="table">
                    <table>
                        <tr className="table-heading">
                            <th>Class</th>
                            <th>Instructor</th> 
                            <th>Days</th> 
                            <th>Time</th>
                            <th>Contact</th> 
                            <th>Add Class</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td></td>
                            <td></td>
                            <td><button className="button">Add Class</button></td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td></td>
                            <td></td>
                            <td><button className="button">Add Class</button></td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>80</td>
                            <td></td>
                            <td></td>
                            <td><button className="button">Add Class</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
      );
    }
  }
