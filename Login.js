import React, { Component } from 'react'
import { login } from './UserFunctions'
import { get } from './UserFunctions'


class Login extends Component {
  constructor() {
    super()
    this.url = '/ipac/login';
    this.state = {
      username: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    let username = this.state.username;
    let password = this.state.password;
    let errors = {};
    let isValid = true;

    if (username == "") {
      isValid = false;
      errors["username"] = "Kindly enter the username";
    }
    if (password == "") {
      isValid = false;
      errors["password"] = 'Kindly enter the password'
    }

    this.setState({ errors: errors });
    if (isValid == true) {

      const value = {
        url: this.url + '?username=' + this.state.username + '&password=' + this.state.password
      }

      get(value)
        .then(response => {
          console.log('result : ', response);
        })
        .catch(err => {
          console.log('error : ', e);
        })

    }

  }

  handleValidation() {
    let username = this.state.username;
    let password = this.state.password;
    let errors = {};
    let isValid = true;

    if (username == null && username == "") {
      isValid = false;
      errors["username"] = "Kindly enter the username";
    }
    if (password == null && password == "") {
      isValid = false;
      errors["password"] = 'Kindly enter the password'
    }
    return isValid;
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <img src={require('../logo.svg')} height='70' width='70' />
            <p>An insurance premium is the amount of money an individual or business pays for an insurance policy.Insurance premiums are paid for policies that cover healthcare, auto, home, life, and others. Once earned, the premium is income for the insurance company.
            <br></br><br></br>The amount of insurance premiums charged by theinsurance companies is determined by statistics and mathematical calculations done by the underwriting department of the insurance company. The level ofinsurance premium charged to a customer depends on statistical data that exists about life history, age and health.
          </p>
          </div>
          <div className="col-md-4 mt-5">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <span className="text-danger">{this.state.errors['username']}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <span className="text-danger">{this.state.errors['password']}</span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div >
    )
  }
}

export default Login
