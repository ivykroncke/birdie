import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const AddUserContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const StyledInput = styled.input`
border: .25rem darkgray solid;
padding: .5rem;
margin: 3rem;
width: 50%;
`

const StyledSubmit = styled.div`
background-color: darkgray;
color: white;
border-radius: 15%;
padding: 1rem;
`

export default class CreateUser extends Component {
  state = {
    newUser: {
      username: '',
      emailaddress: ''
    }
  }

  handleChange = (event) => {
    const newUser = { ...this.state.newUser }
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }

  addUser = async (event) => {
    event.preventDefault()
    await axios.post('/api/users', this.state.newUser)
  }


  render() {
    return (
      <AddUserContainer>
        <form>
            <div>Username</div>
            <StyledInput type='text' name='username' 
              onChange={this.handleChange} />
            <div>E-mail Address</div>
            <StyledInput type='text' name='emailaddress' 
              onChange={this.handleChange} />
            <StyledSubmit type="submit" onClick={this.addUser}>Submit</StyledSubmit>
        </form>
      </AddUserContainer>
    )
  }
}
