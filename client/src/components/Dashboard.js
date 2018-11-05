import React, { Component } from 'react'
import Nav from './Nav';
import NewPost from './NewPost'
import AllPostsById from './AllPostsById'
import AllPostsByAllUsers from './AllPostsByAllUsers';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
       <Nav />
       <NewPost />
       <AllPostsById />
       <AllPostsByAllUsers />
      </div>
    )
  }
}
