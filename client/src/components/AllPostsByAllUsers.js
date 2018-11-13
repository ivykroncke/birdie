import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { Button } from 'semantic-ui-react'

const CommunityContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

const CommentContainer = styled.div`
width: 70vw;
background-color: lightgray;
margin: 4vw;
padding: 2.5vw;
`

export default class AllPostsByAllUsers extends Component {

  state = {
    users: [],
    allPosts: []
  }

  setAllPostsState = (usersPosts) => {
    this.setState({ allPosts: usersPosts})
  }
  
  splitPosts = (allPosts) => {
    let usersPosts = []
    allPosts.forEach((post) => {
      for (let j = 0; j < post.length; j++) {
        usersPosts.push(post[j])
      }
      usersPosts.flat()
      return ( usersPosts)
    })
    this.setAllPostsState(usersPosts)
  }
 
  getAllPosts = async (allUsersIds) => {
    let allPosts = []
    for (let i = 0; i < allUsersIds.length; i++) {
      const response = await axios.get(`/api/users/${allUsersIds[i]}/posts`)
      allPosts.push(response.data)
    }
    this.splitPosts(allPosts)
  }
 

  getAllUserIds = () => {
    const allUsersIds = this.state.users.map((user, i) => {
      return user.id
    })
    this.getAllPosts(allUsersIds)
  }

  componentDidMount = async () => {
    const allUsers = await axios.get(`/api/users/`)
    this.setState({ users: allUsers.data })
    this.getAllUserIds()
  }

  backToMenu = () => {
    this.props.toggleAllPostsByAllUsers()
  }

  render() {

    const postsByAllUsers = this.state.allPosts.map((post, i) => {
      return ( 
        <CommentContainer key={i}>
          <div>{post.title}</div>
          <div>{post.content}</div>
        </CommentContainer>
      )
    })

    return (
      <CommunityContainer>
          <h1>Birdie Community</h1>
          <div>{postsByAllUsers}</div>
          <div> <Button onClick={this.backToMenu}> Back To Menu </Button> </div> 
      </CommunityContainer>
    )
  }
}
