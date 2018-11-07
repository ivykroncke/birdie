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
  state = {
    users: {},
    posts: [],
    showUserPosts: false
  }

  componentDidMount = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    const postResponse = await axios.get(`/api/users/${userId}/posts/`)
    this.setState({ users: response.data, posts: postResponse.data })  
  }

  toggleAllPostsById = () => {
    this.setState({
      showUserPosts: !this.state.showUserPosts
    })
  }

  render() {
    return (
      <DashContainer>
       <Nav users={this.state.users}/>

        { this.state.showUserPosts ? 
          (<AllPostsById posts={this.state.posts}/>) : 
          (<DashMenu toggleAllPostsById={this.toggleAllPostsById}/>)
        }
      </DashContainer>
    )
  }
}
