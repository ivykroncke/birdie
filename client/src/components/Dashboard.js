import React, { Component } from 'react'
import Nav from './Nav';
import AllPostsById from './AllPostsById'
import styled from 'styled-components'
import DashMenu from './DashMenu';
import axios from 'axios'

import Browse from './Browse';

const DashContainer = styled.div`
height: 100vh;
width: 100vw;
`

export default class Dashboard extends Component {
  state = {
    users: {},
    posts: [],
    showUserPosts: false,
    showBrowse: false
  }

  componentDidMount = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    const postResponse = await axios.get(`/api/users/${userId}/posts/`)
    this.setState({ users: response.data, posts: postResponse.data })  
  }

  toggleAllPostsById = () => {
    console.log("ToggleAllPosts responds")
    this.setState({
      showUserPosts: !this.state.showUserPosts
    })
  }

  toggleBrowse = () => {
    this.setState({
      showBrowse: !this.state.showBrowse
      
    })
  }

  render() {
    return (
      <DashContainer>

       <Nav users={this.state.users}/>

       { !this.state.showBrowse && !this.state.showUserPosts ?
          (<DashMenu 
            toggleBrowse={this.toggleBrowse} toggleAllPostsById={this.toggleAllPostsById}
            />) : null 
        }

        { this.state.showUserPosts ? 
          (<div>
              <AllPostsById 
                posts={this.state.posts}
                toggleAllPostsById={this.toggleAllPostsById} />
            </div>)
          : null
        }       

        { this.state.showBrowse ?
          (<Browse />)
          : null  
        }

      </DashContainer>
    )
  }
}
