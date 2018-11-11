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

const StyledInput = styled.input`
border: .25rem darkgray solid;
padding: .5rem;
margin: 3rem;
width: 50%;
`

export default class NewPost extends Component {
  state = {
    newPost: {
      title: '',
      content: ''
    }
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
            <StyledInput type="text" name="title" onChange={this.handleChange}></StyledInput>
          </Form.Field>

          <Form.Field>
            <label>Content</label>
            <StyledInput type="text" name="content" onChange={this.handleChange}></StyledInput>
          </Form.Field>

        <Button type="submit" onClick={this.addPost}> Submit </Button>
        </Form>

      </NewPostContainer>
    )
  }
}
