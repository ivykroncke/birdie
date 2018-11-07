import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lora|Roboto');
font-family: Roboto, sans-serif;
a {
  color: inherit;
  text-decoration: none;
}
`

export default class Home extends Component {
  render() {
    return (
      <AppWrapper>
        <div>HOME</div>
        <Link to="/login">Login</Link>
      </AppWrapper>
    )
  }
}
