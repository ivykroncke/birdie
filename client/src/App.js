import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import styled from 'styled-components'
import EditDeleteUser from './components/EditDeleteUser';
import ShowOnePost from './components/ShowOnePost';
import ShowOneBird from './components/ShowOneBird';
import ShowOneTaxon from './components/ShowOneTaxon';

const AppWrapper = styled.div`
height: 100%;
@import url('https://fonts.googleapis.com/css?family=Lora|Roboto');
font-family: Roboto, sans-serif;
background-color: rgba(59, 75, 78, 0.12);
a {
  color: inherit;
  text-decoration: none;
}
h1 {
  font-family: Lora, sans-serif;
  margin: 0 auto;
  padding: 5vh 5vw 2.5vh 5vw;
}
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Login} />
            <Route exact path="/users/:id/" component={Dashboard} />
            <Route exact path="/users/:id/edit/" component={EditDeleteUser} />
            <Route exact path="/users/:userId/posts/:id/" component={ShowOnePost} />
            <Route exact path="/users/:userId/birds/:id/" component={ShowOneBird} />
            <Route exact path="/users/:userId/birds/:birdId/taxons/:id" component={ShowOneTaxon} />
          </Switch>
        </Router>
      </AppWrapper>
      
    )
  }
}

export default App;
