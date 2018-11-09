import React, { Component } from 'react'
import Nav from './Nav';
import AllPostsById from './AllPostsById'
import styled from 'styled-components'
import DashMenu from './DashMenu';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import Browse from './Browse';
import NewPost from './NewPost';
import AllPostsByAllUsers from './AllPostsByAllUsers';

const DashContainer = styled.div`
height: 100vh;
width: 100vw;
`

export default class Dashboard extends Component {
  state = {
    users: {},
    posts: [],
    showUserPosts: false,
    showBrowse: false,
    showNewPost: false,
    showAllPostsByAllUsers: false,
    redirectPage: false
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

  toggleBrowse = () => {
    this.setState({
      showBrowse: !this.state.showBrowse
      
    })
  }

  toggleShowNewPost = () => {
    this.setState({
      showNewPost: !this.state.showNewPost
    })
  }

  toggleAllPostsByAllUsers = () => {
    this.setState({
      showAllPostsByAllUsers: !this.state.showAllPostsByAllUsers
    })
  }


  render() {

    return (

      <DashContainer>

       <Nav 
        users={this.state.users} 
        arbitraryToggle={this.arbitraryToggle} 
        userId={this.props.match.params.id}
        />

       { !this.state.showBrowse && 
          !this.state.showUserPosts &&
          !this.state.showNewPost &&
          !this.state.showAllPostsByAllUsers ?
          (<DashMenu 
            toggleBrowse={this.toggleBrowse} 
            toggleAllPostsById={this.toggleAllPostsById}
            toggleShowNewPost={this.toggleShowNewPost}
            toggleAllPostsByAllUsers={this.toggleAllPostsByAllUsers}
            />) : null 
        }

        { this.state.showUserPosts ? 
          (<div>
              <AllPostsById 
                posts={this.state.posts}
                toggleAllPostsById={this.toggleAllPostsById}
                userId={this.props.match.params.id} />
            </div>)
          : null
        }       

        { this.state.showBrowse ?
          (<Browse />) : null  
        }

        { this.state.showNewPost ?
          (<NewPost 
          userId={this.props.match.params.id}/>) : null
        }

        { this.state.showAllPostsByAllUsers ?
          (<AllPostsByAllUsers />) : (null )
        }

      </DashContainer>
    )
  }
}
