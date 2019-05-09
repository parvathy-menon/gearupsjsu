import React from 'react';
import './Pages.css';
//import classInfo from './classes';
import Gymclass from './Gymclass';

export default class DropClass extends React.Component {
    state = {
        gymclasses: [
            {
                id: '1',
                name: 'Yoga',
                instructor: 'Jill Smith',
                days: 50,
                time: 'MW 09:00 - 10:00',
                contact: 'jill.smith@gearup.com'
            },
            {
                id: '2',
                name: 'Yoga',
                instructor: 'Kevin Tracy',
                days: 50,
                time: 'TR 14:00 - 15:00',
                contact: 'kevin.tracy@gearup.com'
            },
            {
                id: '3',
                name: 'Cycling',
                instructor: 'Eve Jackson',
                days: 60,
                time: 'MW 13:00 - 14:00',
                contact: 'eve.jackson@gearup.com'
            },
            {
                id: '11',
                name: 'Boxing',
                instructor: 'Alan Odonnell',
                days: 100,
                time: 'MW 17:00 - 18:00',
                contact: 'alan.odonnell@gearup.com'
            },
            {
                id: '4',
                name: 'Aerobics',
                instructor: 'Carl Henson',
                days: 30,
                time: 'TR 10:00 - 11:00',
                contact: 'carl.henson@gearup.com'
            },
            {
                id: '5',
                name: 'Pilates',
                instructor: 'Janiah Bullock',
                days: 30,
                time: 'FR 11:00 - 13:00',
                contact: 'janiah.bullock@gearup.com'
            },
            {
                id: '6',
                name: 'Weights',
                instructor: 'Joe Macias',
                days: 30,
                time: '19:00 - 20:00',
                contact: 'joe.macias@gearup.com'
            }

        ]
    }
    deleteClass = (index, e)=>{
        const gymclasses = Object.assign([], this.state.gymclasses);
        gymclasses.splice(index, 1);
        this.setState({gymclasses:gymclasses});
    }

    render() {
      return (
        <div className="App">
            <div className="heading">
                Drop Classes
            </div>
            <ul>
                {
                    this.state.gymclasses.map((gymclass, index)=>{
                        return (
                            <div>
                                <Gymclass 
                                name = {gymclass.name}
                                instructor = {gymclass.instructor}
                                days = {gymclass.days}
                                time = {gymclass.time}
                                contact = {gymclass.contact}
                                delEvent={this.deleteClass.bind(this, index)}
                                >{gymclass.id}</Gymclass>
                            </div>
                        );
                    })
                }
            </ul>
            <br />
        </div>
      );
    }
  }
