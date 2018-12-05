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

const ButtonWrapper = styled.div`
margin: 5vh;
`

const PostTitle = styled.div`
font-size: 1rem;
font-family: Lora;
font-weight: bold;
`

const PostAuthor = styled.div`
padding: .25rem;
`

const PostContent = styled.div`
padding: .25rem;
`

export default class AllPostsByAllUsers extends Component {

  state = {
    users: [],
    allPosts: []
  }

  getUserInfo = (usersPosts) => {
    const usersPostsWithUserNames = usersPosts.map((post, i) => {
      const thisPostId = post.user_id
      const findUsername = this.state.users.find(u => u.id === thisPostId)
      post.username = findUsername.username
      return post
    })
    this.setState({ allPosts: usersPostsWithUserNames})
  }

  setAllPostsState = (usersPosts) => {
    this.getUserInfo(usersPosts)
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
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <PostAuthor>user: {post.username} {post.created_at}</PostAuthor>
        </CommentContainer>
      )
    })

    return (
      <CommunityContainer>
          <h1>Birdie Community</h1>
          <div>{postsByAllUsers}</div>
          <ButtonWrapper> <Button onClick={this.backToMenu}> Back To Menu </Button> </ButtonWrapper> 
      </CommunityContainer>
    )
  }
}
