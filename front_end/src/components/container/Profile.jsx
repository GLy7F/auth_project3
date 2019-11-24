// @github_bosheca
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      errors: {}
    }
  }
  compon
  componentDidMount() {
    const token = localStorage.usertoken
    console.log(token)
    const decoded = jwt_decode(token)
    console.log(decoded)
    this.setState(decoded.user)
    console.log(this.state);
  }
  render() {
    return (
      // profile details
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.firstname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.lastname}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Profile