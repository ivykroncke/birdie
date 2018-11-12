import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { Form, Button } from 'semantic-ui-react'

const NewPostContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledHeader = styled.h1`
padding: 5vh;
`

export default class NewPost extends Component {
  state = {
    newPost: {
      title: '',
      bird: '',
      content: ''
    },
    birds: []
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/birds')
    const birdInfo = response.data
    this.setState({ birds: birdInfo })
  }

  handleChange = (event) => {
    const newPost = { ...this.state.newPost }
    newPost[event.target.name] = event.target.value
    this.setState({ newPost })
  }

  addPost = async (event) => {
    event.preventDefault()
    const userId = this.props.userId
    await axios.post(`/api/users/${userId}/posts`, this.state.newPost)
  }

  render() {
    return (
      <NewPostContainer>

        <StyledHeader>New Post</StyledHeader>
        
        <Form>
          <Form.Field>
            <label>Title</label>
            <input 
              placeholder="Your title here"
              type="text" 
              name="title" 
              onChange={this.handleChange}>
            </input>
          </Form.Field>

          <Form.Field>
            <label>Bird</label>
            <input
            placeholder="Bird name"
            type="text"
            name=""
            onChange={this.handleChange}>
            </input>
          </Form.Field>

          <Form.Field>
            <label>Content</label>
            <textarea 
              placeholder="Your observations here"
              type="text" 
              rows="5"
              name="content" 
              onChange={this.handleChange}>
            </textarea>
          </Form.Field>

        <Button type="submit" onClick={this.addPost}> Submit </Button>
        </Form>

      </NewPostContainer>
    )
  }
}
