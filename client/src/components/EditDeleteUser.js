import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { Form, Button, Confirm } from 'semantic-ui-react'
import { HomeWrapper, LightBackground } from './SharedComponents'

export default class EditDeleteUser extends Component {
  state = {
    user: [],
    open: false,
    goToDashboard: false,
    goToLogin: false
  }

  componentDidMount = async() => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ user: response.data })
  }

  handleChange = (event) => {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  submitFunction = async (event) => {
    event.preventDefault(event)
    const userId = this.props.match.params.id
    const newInfo = this.state.user
    await axios.put(`/api/users/${userId}`, newInfo)
    this.setState({ goToDashboard: true })
  }

  deleteUser = async (userId) => {
    await axios.delete(`/api/users/${userId}`)
    this.setState({ goToLogin: true })
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {

    const userId = this.props.match.params.id
    if(this.state.goToDashboard) {
      return(<Redirect to={`/users/${userId}/`} />)
    }
    if(this.state.goToLogin) {
      return(<Redirect to={`/users/`} />)
    }

    return (
      <HomeWrapper>
        <LightBackground>
        <h1>Edit User</h1>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input 
              name="username" 
              type="text" 
              placeholder={this.state.user.username}
              onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <input 
              name="emailaddress" 
              type="text" 
              placeholder={this.state.user.emailaddress}
              onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.submitFunction}>
          Submit
          </Button>
        </Form>
        <div>
          <Button color="red" onClick={this.open}>
            Delete this user
          </Button>
          <Confirm 
            open={this.state.open}
            onCancel={this.close}
            onConfirm={()=> this.deleteUser(userId)} />
        </div>

      </LightBackground>
      </HomeWrapper>
    )
  }
}
