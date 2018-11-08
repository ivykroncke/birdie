import React, { Component } from 'react'
import styled from 'styled-components'

const DashMenuContainer = styled.div`
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const DashGrid = styled.div`
display: grid;
margin: 8vw;
grid-gap: 5vw;
grid-template-columns: 40vw 40vw;
grid-template-rows: 40vw 40vw;
`

const DashTile = styled.div`
background-color: darkgray;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
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
