import React, { Component } from 'react'
import { get, post } from './UserFunctions'

class Register extends Component {

  constructor() {
    super()
    this.baseURL = 'http://192.168.0.10:5000';
    this.registerURL = '/ipac/register';
    this.isValid = true;
    this.state = {
      name: '',
      email: '',
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
    // this.isValid = this.handleValidation;
    let email = this.state.email;
    let name = this.state.name;
    let password = this.state.password;
    let errors = {};
    let isValid = true;

    if (email == "") {
      isValid = false;
      errors['email'] = 'Please enter an email address';
    } else {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (name == "") {
      isValid = false;
      errors['name'] = 'Please enter a name'
    }

    if (password == "") {
      isValid = false;
      errors['password'] = 'Please enter a password'
    }

    this.setState({ errors: errors })

    if (isValid == true) {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }

      const value = {
        baseUrl: this.baseURL,
        url: this.registerURL,
        data: newUser
      }

      post(value)
        .then(data => {
          // console.log("result : ", data);
          if (data.status == 200) {
            alert('User Created Successfully');
          } else {
            alert('User Registration Failure', data.status);
          }

        })
        .catch(err => {
          console.log("error : ", err);
          alert('Something went wrong', err);
        })

      // console.log("json : ", value);
    }
  }

  handleValidation() {
    let email = this.state.email;
    let name = this.state.name;
    let password = this.state.password;
    let errors = {};
    let isValid = true;

    if (email == "") {
      isValid = false;
      errors['email'] = 'Please enter an email address';
    } else {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (name == "") {
      isValid = false;
      errors['name'] = 'Please enter a name'
    }

    if (password == "") {
      isValid = false;
      errors['password'] = 'Please enter a password'
    }

    this.setState({ errors: errors })
    return isValid;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <span className="text-danger" >{this.state.errors['name']}</span>
              </div>
              {/* <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <span className="text-danger" >{this.state.errors['email']}</span>
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
                <span className="text-danger" >{this.state.errors['password']}</span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
