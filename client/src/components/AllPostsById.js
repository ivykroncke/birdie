import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const AllElementsContainer = styled.div`
height: 100vh;
`

const PostContainer = styled.div`
background-color: lightgray;
font-size: 1rem;
margin: 3vh;
padding: 5vh;
`

const ButtonContainer = styled.div`
margin: 5vh;
`

export default class AllPostsById extends Component {

  backToMenu = () => {
    this.props.toggleAllPostsById()
  }

  render() { 

    const allPosts = this.props.posts.map((post, i) => {
      return (
        <Link to={`/users/${this.props.userId}/posts/${post.id}`} key={i}>
          <PostContainer >
            <h3>{post.title}</h3>
            <div>{post.date}</div>
            <div>{post.content}</div>
            </PostContainer>
       </Link>
        
      )
    })

    return (
      <AllElementsContainer>
          <h1>Field Guide</h1>
          <div>{allPosts}</div>
       <ButtonContainer> <Button onClick={this.backToMenu}> Back To Menu </Button> </ButtonContainer>
      </AllElementsContainer>

    )
  }
}
