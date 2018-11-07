import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateUser from './CreateUser'
import axios from 'axios'

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin: 0 2rem;
`

const StyledLogin = styled.h1`
padding: 2rem;
`

const StyledUsers = styled.div`
text-align: center;
`

const StyledUser = styled.div`
padding: 1rem;
`

const ButtonForCreateNewUser = styled.div`
padding: .5rem;
border: .1rem solid black;
border-radius: 15%;
margin: 2rem;
`

export default class Login extends Component {
  state = {
    users : [
      {username: "Ivy"},
      {username: "Fritz"},
      {username: "Charlotte"}
    ],
    createNewUserToggle: true
  }

  toggleCreateNewUser = () => {
    this.setState({ createNewUserToggle: !this.state.createNewUserToggle })
  }

  render() {

    const UsersList = this.state.users.map((user, i) => {
      return (
      <StyledUser key={i}>
        <div>{user.username} </div> 
      </StyledUser>
      )
    })

    return (
      <LoginContainer>
        <StyledLogin>sign in</StyledLogin>
        {this.state.createNewUserToggle 
           ?(<div>
              <StyledUsers>{UsersList}</StyledUsers>
              <ButtonForCreateNewUser onClick={this.toggleCreateNewUser}>
                Create a New User
              </ButtonForCreateNewUser>
           </div>) :
            (<CreateUser />)}
      </LoginContainer>
    )
  }
}
