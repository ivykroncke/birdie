import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import { Icon, Button, Confirm } from 'semantic-ui-react'
import { HomeWrapper, LightBackground } from './SharedComponents'
import axios from 'axios';

const OnePostLightBackground = styled(LightBackground)`
padding: 5vh;
justify-content: center;
`

const OptionsContainer = styled.div`
display: flex;
width: 50vw;
justify-content: space-around;
`
const Time = styled.div`
font-size: 1rem;
`

export default class ShowOnePost extends Component {
  state ={
    user: {},
    post: {},
    open: false,
    redirect: false
  }

  componentDidMount = async () => {
    const userId = this.props.match.params.userId
    const postId = this.props.match.params.id
    const userData = await axios.get(`/api/users/${userId}/`)
    const postData = await axios.get(`/api/users/${userId}/posts/${postId}`)
    this.setState({ user: userData.data, post: postData.data })
    this.fixTime()
  }

  fixTime = () => {
    const timeFromState = this.state.post.created_at.split('').slice(0,10).join('').split('-').reverse().join('-')
    const swapTime = { ...this.state.post }
    swapTime.created_at = timeFromState
    this.setState({ post: swapTime})
  }

  deletePost = async () => {
    const userId = this.props.match.params.userId
    const postId = this.props.match.params.id
    await axios.delete(`/api/users/${userId}/posts/${postId}`)
    this.setState({ redirect: true })
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {

    const userId = this.props.match.params.userId

    if(this.state.redirect) {
      return(<Redirect to={`/users/${userId}/`} />)
    }

    return (

      <HomeWrapper>
        <OnePostLightBackground>
          <h1>{this.state.post.title}</h1>
          <Time>{this.state.post.created_at}</Time>
          <h3>{this.state.post.content}</h3>
          <OptionsContainer>
            <div>
              <Icon name="trash" onClick={this.open} />
              <Confirm 
                open={this.state.open}
                onCancel={this.close}
                onConfirm={()=> this.deletePost(userId)} />
              </div>
            <Link to={`/users/${userId}/posts/`}><Button>Back</Button></Link>
          </OptionsContainer>
        </OnePostLightBackground>
      </HomeWrapper>

    )
  }
}
