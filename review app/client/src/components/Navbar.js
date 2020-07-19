import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Reviews from './Reviews'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  reviews(e){
    e.preventDefault()
    return (
      <div>
          Movie Review
            </div>
  
  )

  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        
      </ul>
    )
    const revLink = (
      <ul className="navbar-nav">
    <li className="nav-item">
    <a href="" onClick={this.reviews.bind(this)} className="nav-link">
    <Link to="/reviews" className="nav-link">
      Reviews
      </Link>
    </a>
  </li>
  </ul>)

const adminLink = (
  <ul className="navbar-nav">
<li className="nav-item">
<a href="" onClick={this.reviews.bind(this)} className="nav-link">
<Link to="/adminmenu" className="nav-link">
  Admin Menu
  </Link>
</a>
</li>
</ul>)

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {revLink}
          {adminLink}
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
