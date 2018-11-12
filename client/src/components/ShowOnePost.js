import React, { Component } from 'react'
import styled from 'styled-components'
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
    post: {}
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

  render() {

    return (

      <HomeWrapper>
        <OnePostLightBackground>
          <h1>{this.state.post.title}</h1>
          <Time>{this.state.post.created_at}</Time>
          <h3>{this.state.post.content}</h3>
          <OptionsContainer>
            <Icon name="trash" /> <div>Back</div>
          </OptionsContainer>
        </OnePostLightBackground>
      </HomeWrapper>

    )
  }
}
