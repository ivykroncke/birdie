import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'semantic-ui-react'
import { HomeWrapper } from './SharedComponents'
import { FadeIn } from 'animate-css-styled-components'

const AppName = styled.h1`
padding-top: 8vh;
font-size: 10vh;
`

const StyledLink = styled(Link)`
margin: 10vh;
`


export default class Home extends Component {
  render() {
    return (
      <FadeIn  duration="2s">
        <HomeWrapper>
          <AppName>birdie</AppName>
          <StyledLink to="/users"><Button color="black" size="large">Sign In Here</Button></StyledLink>
        </HomeWrapper>
      </FadeIn>

    )
  }
}
