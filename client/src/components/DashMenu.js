import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const DashMenuContainer = styled.div`
height: 75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const DashGrid = styled.div`
height: 100%;
display: grid;
margin:  2vh 5vw;
grid-gap: 7vw;
grid-template-columns: 35vw 35vw;
grid-template-rows: 35vw 35vw;

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
background-color: rgb(129, 138, 141);
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
text-align: center;
font-size: 1.5rem;
box-shadow: rgb(141, 137, 129) .5rem .5rem 1.5rem;
:hover {
  background-color: rgb(104, 112, 115);
}

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
        <h1>Welcome!</h1>
          <DashGrid>
            <DashTile onClick={this.props.toggleShowNewPost}><div> New Post </div></DashTile>
            <DashTile onClick={this.props.toggleAllPostsById}><div> My Field Guide </div></DashTile>
            <DashTile onClick={this.props.toggleAllPostsByAllUsers}><div> Birdie Community </div></DashTile>
            <DashTile onClick={this.props.toggleBrowse}><div> Browse Taxonomy </div></DashTile>
          </DashGrid>
      </DashMenuContainer>
    )
  }
}
