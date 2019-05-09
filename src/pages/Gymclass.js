import React from 'react';

const gymclass = (props) => {
    return(
        <div className="dropclass-grid">
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
                <td>{props.name}</td>
                <td>{props.instructor}</td>
                <td>{props.days}</td>
                <td>{props.time}</td>
                <td>{props.contact}</td>
                <td><button onClick={props.delEvent} className="button">Drop Class</button></td>
            </tr>
        </table>
        </div>
    );
}

export default gymclass;