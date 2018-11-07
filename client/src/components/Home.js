import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeWrapper = styled.div`
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
background-image: url('https://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000');
background-size: cover;
`

const AppName = styled.h1`
font-size: 4rem;
`

const StyledLogin = styled(Link)`
padding: .5rem;
border: .1rem solid black;
border-radius: 15%;
`

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <AppName>birdie</AppName>
        <StyledLogin to="/login">Login</StyledLogin>
      </HomeWrapper>
    )
  }
}
