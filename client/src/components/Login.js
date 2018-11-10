import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateUser from './CreateUser'
import axios from 'axios'

import { Button } from 'semantic-ui-react'
import { HomeWrapper, LightBackground } from './SharedComponents'

const StyledLogin = styled.h1`
text-align: center;
padding: 2rem;
`

const StyledUsers = styled.div`
text-align: center;
`

const StyledUser = styled(Link)`
padding: 1rem;
`

const ButtonForCreateNewUser = styled(Button)`
text-align: center;
width: 100%;
`

export default class Login extends Component {
  state = {
    users : [],
    createNewUserToggle: true
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users/')
    this.setState({ users: response.data })
  }

  toggleCreateNewUser = () => {
    this.setState({ createNewUserToggle: !this.state.createNewUserToggle })
  }

  render() {

    const UsersList = this.state.users.map((user, i) => {
      return (
      <StyledUser to={`/users/${user.id}/`} key={i}>
        <div>{user.username} </div> 
      </StyledUser>
      )
    })

    return (
      <HomeWrapper>
        <LightBackground>
        {this.state.createNewUserToggle 
           ?(<div>
             <StyledLogin>Select a User</StyledLogin>
              <StyledUsers>{UsersList}</StyledUsers>
              <ButtonForCreateNewUser onClick={this.toggleCreateNewUser}>
                Create a New User
              </ButtonForCreateNewUser>
           </div>) :
            ( <div>
                <StyledLogin>Create a New User </StyledLogin>
                <CreateUser />
              </div>
              )}
        </LightBackground>
      </HomeWrapper>
    )
  }
}
