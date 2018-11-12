import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'semantic-ui-react'
import { HomeWrapper } from './SharedComponents'
import { FadeIn } from 'animate-css-styled-components'
import media from 'styled-media-query'

const AppName = styled.h1`
padding-top: 8vh;
font-size: 10vh;
`

const StyledLink = styled(Link)`
margin: 10vh;
`

const StyledButton = styled(Button) `
background-color: blue;
    ${media.greaterThan('small')`
      class="huge"
    `}
`

export default class Home extends Component {
  render() {
    return (
      <FadeIn  duration="2s">
        <HomeWrapper>
          <AppName>birdie</AppName>
          <StyledLink to="/users"><StyledButton color="black" role="button">Sign In Here</StyledButton></StyledLink>
        </HomeWrapper>
      </FadeIn>

    )
  }
}
