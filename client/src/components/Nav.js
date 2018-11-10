import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: slategray;
color: white;
`

const SiteTitle = styled.h1`
font-size: 2rem;
margin: 0;
padding: 0 0 0 5vw;
`

const StyledLinkToUser = styled(Link)`
font-size: 1rem;
margin-right: 5vw;
`

export default class Nav extends Component {

  render() {

    const userId = this.props.users.id

    return (
      <NavContainer>
        <SiteTitle onClick={this.props.refreshPage}>birdie</SiteTitle>
        <StyledLinkToUser to={`/users/${userId}/edit`}> 
          {this.props.users.username}
        </StyledLinkToUser>
      </NavContainer>
    )
  }
}
