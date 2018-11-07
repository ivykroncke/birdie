import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
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
    },
    lastCreatedUserId: 0
  }

  handleChange = (event) => {
    const newUser = { ...this.state.newUser }
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }

  getNewUserId = async () => {
    const response = await axios.get('/api/users')
    const indexOfNewest = response.data.length - 1
    console.log("index of newest user", indexOfNewest)
    const idOfNewest = response.data[indexOfNewest].id
    console.log("id of newest user", idOfNewest)
    console.log(typeof idOfNewest)
    this.saveNewUserId(idOfNewest)
  }

  saveNewUserId = (idOfNewest) => {
    let newId = { ...this.state.lastCreatedUserId }
    newId = idOfNewest
    this.setState ({ lastCreatedUserId: newId })
  }

  addUser = async (event) => {
    event.preventDefault()
    await axios.post('/api/users', this.state.newUser)
    this.getNewUserId()
  }

  render() {
    const userId = this.state.lastCreatedUserId

    if (this.state.lastCreatedUserId) {
      return (
        <Redirect to={`/users/${userId}/dashboard`} />
      )
    }

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
