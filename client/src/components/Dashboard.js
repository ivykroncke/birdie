import React, { Component } from 'react'
import Nav from './Nav';
import NewPost from './NewPost'
import AllPostsById from './AllPostsById'
import AllPostsByAllUsers from './AllPostsByAllUsers';
import styled from 'styled-components'
import DashMenu from './DashMenu';
import axios from 'axios'

const DashContainer = styled.div`
height: 100vh;
width: 100vw;
`

export default class Dashboard extends Component {
  //all properties for that user
  state = {
    user: {},
    posts: {}
  }

  componentDidMount = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ user: response.data })
  }

  render() {
    return (
      <DashContainer>
       <Nav user={this.state.user}/>
       <DashMenu />
       <AllPostsById />
       <AllPostsByAllUsers /> 
      </DashContainer>
    )
  }
}
