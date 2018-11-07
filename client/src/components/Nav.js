import React, { Component } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

background-color: blue;
color: white;
`

const SiteTitle = styled.h1`
font-size: 2rem;
margin-left: 5vw;
`

const StyledUserIcon = styled.div`
font-size: 1rem;
margin-right: 5vw;
`

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <SiteTitle>birdie</SiteTitle>
          <StyledUserIcon>User Icon Here</StyledUserIcon>
      </NavContainer>
    )
  }
}
