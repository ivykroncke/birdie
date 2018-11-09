import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ShowOnePost from './ShowOnePost';

const AllPostsByIdContainer = styled.div`
color: black;
`

const AllPostsContainer = styled.div`
  text-align: center;
  height: 40vh;
`

const PostContainer = styled.div`
background-color: lightgray;
font-size: 1rem;
margin: 3vh;
padding: 5vh;
`

export default class AllPostsById extends Component {

  render() { 

    const allPosts = this.props.posts.map((post, i) => {
      return (
        <PostContainer key={i}>
          <Link to={`/users/${this.props.userId}/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <div>{post.date}</div>
            <div>{post.content}</div>
          </Link>
        </PostContainer>
      )
    })

    return (
      <AllPostsByIdContainer>
       <AllPostsContainer>
          <h1>Field Guide</h1>
          <h2>Your Observations</h2>
          {allPosts}
        </AllPostsContainer>

      </AllPostsByIdContainer>

    )
  }
}
