import React from 'react';
import './Pages.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="home-grid">
          <div className="home-first-part">
              <div className="background">
              <div className="logo">
                Gear Up
              </div>
              </div>
          </div>
          <div className="team">
            <div className="team-heading">
              About Us
            </div>
            <div className="team-body">
              <div className="tm-1">
                <div className="image"/>
              </div>
              <div className="tm-2">
              Fitness is a part of every disciplined person and hence gym memberships are high in demand. GearUp makes managing a complicated membership system easier and smoother so that our users can enjoy stress-free membership experience.
              </div>
            </div>
          </div>
          <div className="copyright">
            All Copyrights are reserved with GearUp.
        </div>
        </div>
      </div>
    );
  }
}
