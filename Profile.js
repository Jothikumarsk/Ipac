import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    // const token = localStorage.usertoken
    // const decoded = jwt_decode(token)
    // this.setState({
    //   first_name: decoded.first_name,
    //   last_name: decoded.last_name,
    //   email: decoded.email
    // })
  }

  render() {
    return (
      <div className="container">
        <div className="row" >
          <div className="col-md-6 mt-5">
            <DropdownButton id="dropdown-item-button" title="Select Product">
              <Dropdown.Item as="button">Property</Dropdown.Item >
              <Dropdown.Item as="button">Liability</Dropdown.Item>
              <Dropdown.Item as="button">Casuality</Dropdown.Item>
            </DropdownButton>
            <div>

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Profile
