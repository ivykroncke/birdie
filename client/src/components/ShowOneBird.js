import React, { Component } from 'react'
import axios from 'axios';
import Nav from './Nav';
import styled from 'styled-components'

import { Button } from 'semantic-ui-react'

const ShowOneContainer = styled.div`
height: 100vh;
`

const SpeciesContainer = styled.div`
text-align: center;
padding: 2vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const SpeciesButton = styled(Button)`
margin: 2vh;
`


export default class ShowOneBird extends Component {
  state = {
    birds: []
  }

  componentDidMount = async () => {
    let birdData = await axios.get(`/api/birds/${this.props.match.params.id}`)
    birdData = birdData.data.Species
    this.setState({ birds: birdData })
  }

  render() {

    const birdsInFamily = this.state.birds.map((bird, i) => {
      return (
          <SpeciesButton key={i}>
            { bird.AcceptedCommonName ? 
              (bird.AcceptedCommonName):(bird.ScientificName)}
          </SpeciesButton>
      )
    })

    return (
      <ShowOneContainer>
        {/* <Nav /> */}
        <SpeciesContainer >
          <h1> Featured Species in {this.props.match.params.id} </h1>
          <div>{birdsInFamily}</div>
        </SpeciesContainer>
      </ShowOneContainer>
    )
  }
}
