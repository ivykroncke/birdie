import React, { Component } from 'react'
import styled from 'styled-components'

import { Form, Button } from 'semantic-ui-react'

const NewPostContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const Circle = styled.div`
background-color: red;
height: 5vh;
`

const StyledInput = styled.div`
border: .25rem darkgray solid;
padding: .5rem;
margin: 3rem;
width: 50%;
`

export default class NewPost extends Component {
  render() {
    return (
      <NewPostContainer>

        <Circle></Circle>
        <h1>New Post</h1>
        
        <Form>
        <div>
          Title
        <StyledInput></StyledInput>
        </div>
        <div>
          Content
        <StyledInput></StyledInput>
        </div>
        </Form>

        <Button type="submit"> Submit </Button>

      </NewPostContainer>
    )
  }
}
