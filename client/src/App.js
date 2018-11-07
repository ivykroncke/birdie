import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import styled from 'styled-components'

const AppWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lora|Roboto');
font-family: Roboto, sans-serif;
a {
  color: inherit;
  text-decoration: none;
}
h1 {
  font-family: Lora, sans-serif;
}
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </AppWrapper>
    )
  }
}

export default App;
