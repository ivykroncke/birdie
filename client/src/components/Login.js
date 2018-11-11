import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateUser from './CreateUser'
import axios from 'axios'

import { Button } from 'semantic-ui-react'
import { HomeWrapper, LightBackground } from './SharedComponents'

const StyledLogin = styled.h1`
text-align: center;
font-family: 3rem;
padding: 3vh;
`

const ContentWrapper = styled.div`
height: 80vh;
display: flex; 
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const StyledUser = styled(Link)`
font-size: 1.5rem;
padding: 3vh;
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
        
           ?(<ContentWrapper>
              <StyledLogin>Select a User</StyledLogin>
              {UsersList}
              <Button color="black" onClick={this.toggleCreateNewUser}>Create a New User</Button>
            </ContentWrapper>) 
           :
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
