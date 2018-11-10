import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'semantic-ui-react'
import { HomeWrapper } from './SharedComponents'


const AppName = styled.h1`
font-size: 10vh;
`

const StyledLink = styled(Link)`
margin: 10vh;
`

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <AppName>birdie</AppName>
        <StyledLink to="/users"><Button>Sign In Here</Button></StyledLink>
      </HomeWrapper>
    )
  }
}
