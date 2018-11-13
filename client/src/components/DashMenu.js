import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const DashMenuContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const DashGrid = styled.div`
height: 100%;
display: grid;
margin: 5vw;
grid-gap: 5vw;
grid-template-columns: 40vw 40vw;
grid-template-rows: 40vw 40vw;

${media.greaterThan('small')` 
  height: 100%;
  display: flex;
  flex-direction: column;
`}

${media.greaterThan('medium')`
  flex-direction: row;
`}
`

const DashTile = styled.div`
background-color: darkgray;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
box-shadow: rgb(141, 137, 129) .5rem .5rem 1.5rem;

${media.greaterThan('small')`
  padding: 3vw;
  width: 80vw;
  border-radius: 1rem;
  margin: 2vw;
`}

${media.greaterThan('medium')`
  width: 15vw;
  height: 15vw;
  border-radius: 100%;
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
