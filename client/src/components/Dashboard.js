import React, { Component } from 'react'
import Nav from './Nav';
import NewPost from './NewPost'
import AllPostsById from './AllPostsById'
import AllPostsByAllUsers from './AllPostsByAllUsers';
import styled from 'styled-components'
import DashMenu from './DashMenu';

const DashContainer = styled.div`
height: 100vh;
width: 100vw;
`

export default class Dashboard extends Component {
  state = {
  }
  render() {
    return (
      <DashContainer>
       <Nav />
       <DashMenu />
       {/* <NewPost />
       <AllPostsById />
       <AllPostsByAllUsers /> */}
      </DashContainer>
    )
  }
}
