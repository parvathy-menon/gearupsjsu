import React from 'react';
import './Pages.css';
import classInfo from './classes';

export default class DropClass extends React.Component {
    constructor(props){
        super(props);


    }
    dropClass(classInfo){

    }
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
                            <th>Add Class</th>
                        </tr>
                        <tr>
                            <td>{classInfo[0].class}</td>
                            <td>{classInfo[0].instructor}</td>
                            <td>{classInfo[0].days}</td>
                            <td>{classInfo[0].time}</td>
                            <td>{classInfo[0].contact}</td>
                            <td><button onClick={(e)=> this.dropClass(classInfo[0])}  className="button">Drop Class</button></td>
                        </tr>
                        <tr>
                            <td>{classInfo[1].class}</td>
                            <td>{classInfo[1].instructor}</td>
                            <td>{classInfo[1].days}</td>
                            <td>{classInfo[1].time}</td>
                            <td>{classInfo[1].contact}</td>
                            <td><button className="button">Drop Class</button></td>
                        </tr>
                        <tr>
                            <td>{classInfo[2].class}</td>
                            <td>{classInfo[2].instructor}</td>
                            <td>{classInfo[2].days}</td>
                            <td>{classInfo[2].time}</td>
                            <td>{classInfo[2].contact}</td>
                            <td><button className="button">Drop Class</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
      );
    }
  }
