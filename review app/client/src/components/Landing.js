import React, { Component } from 'react'
import logo from '../components/landing.jpg';
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-6">
          <div className="col-sm-10 mx-auto">
            {/* <h1 className="text-center" >MOVIE REVIEWS</h1> */}
            <div className="logo">
              <img src={logo} class="center"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
