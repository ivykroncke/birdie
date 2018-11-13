import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import { Form, Button, Segment, Dropdown } from 'semantic-ui-react'

const NewPostContainer = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledHeader = styled.h1`
padding: 5vh;
`

const BackButton = styled.div`
margin: 5vh;
`

export default class NewPost extends Component {
  state = {
    newPost: {
      title: '',
      birdname: '',
      content: ''
    }
  }

  handleChange = (event) => {
    const newPost = { ...this.state.newPost }
    newPost[event.target.name] = event.target.value
    this.setState({ newPost })
  }

  birdHandleChange = (event) => {
    const birdId = event.target.dataset.value
    console.log(birdId)
    const newPost = { ...this.state.newPost }
    newPost.birdname = birdId
    this.setState({ newPost })
  }

  addPost = async (event) => {
    event.preventDefault()
    const userId = this.props.userId
    await axios.post(`/api/users/${userId}/posts`, this.state.newPost)
    this.props.updateState()
  }

  backToFieldGuide = () => {
    this.props.toggleAllPostsById()
  }

  backToMenu =() => {
    this.props.toggleShowNewPost()
  }

  render() {

    const taxonomyList = this.props.birds.map((bird, i) => {
          return (
              <div key={i} onClick={this.birdHandleChange} data-value={bird.FamilyCommonName}>
                  <Segment>
                      <div data-value={bird.FamilyCommonName}>{bird.FamilyCommonName}</div>
                  </Segment>
              </div>
          )
    })

    return (

      <NewPostContainer>

        <StyledHeader>Record Your Observation</StyledHeader>
        
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

          <Dropdown placeholder="select Family" fluid selection options={taxonomyList} />

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

        <BackButton><Button onClick={this.backToMenu}> Back to Menu </Button>
          </BackButton>

      </NewPostContainer>
    )
  }
}
