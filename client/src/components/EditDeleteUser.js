import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { Form, Button } from 'semantic-ui-react'

const EditWrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class EditDeleteUser extends Component {
  state = {
    user: []
  }

  componentDidMount = async() => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ user: response.data })
  }

  render() {
    return (
      <EditWrapper>
        <h1>Edit User</h1>
        <Form>
          <Form.Field>
            <lable>Username</lable>
            <input name="username" type="text" placeholder={this.state.user.username}/>
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <input name="emailaddress" type="text" placeholder={this.state.user.emailaddress} />
          </Form.Field>
          <Button>

          </Button>
        </Form>

      </EditWrapper>
    )
  }
}
