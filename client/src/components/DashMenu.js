import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const DashMenuContainer = styled.div`
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const DashGrid = styled.div`
display: grid;
margin: 5vw;
grid-gap: 5vw;
grid-template-columns: 40vw 40vw;
grid-template-rows: 40vw 40vw;

${media.greaterThan('small')`
  display: flex;
  flex-direction: column;
`}
`

const DashTile = styled.div`
background-color: darkgray;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;

${media.greaterThan('small')`
  padding: 5vw;
  width: 80vw;
  border-radius: 5rem;
  margin: 2vw;
`}
`

export default class DashMenu extends Component {
  render() {
    return (
      <DashMenuContainer>
          <DashGrid>
            <DashTile onClick={this.props.toggleShowNewPost}><div> New Post </div></DashTile>
            <DashTile onClick={this.props.toggleAllPostsById}><div> Field Journal </div></DashTile>
            <DashTile onClick={this.props.toggleAllPostsByAllUsers}><div> birdie Community </div></DashTile>
            <DashTile onClick={this.props.toggleBrowse}><div> Browse </div></DashTile>
          </DashGrid>
      </DashMenuContainer>
    )
  }
}
