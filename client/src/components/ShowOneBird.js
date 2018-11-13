import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const ShowOneContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const SpeciesContainer = styled.div`
text-align: center;
padding: 2vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const Feather = styled.img`
height: 10vh;
padding-top: 2vh;
`

const SpeciesButton = styled(Button)`
margin: 2vh;
`

const CenterButton = styled.div`
padding: 3vh;
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
          <Link to={`/users/${this.props.match.params.userId}/birds/${this.props.match.params.id}/taxons/${bird.TaxonID}`}>
          { bird.AcceptedCommonName ? 
              (bird.AcceptedCommonName):(bird.ScientificName)}
          </Link>
          </SpeciesButton>
      )
    })

    return (
      <ShowOneContainer>
        <SpeciesContainer >
          <Feather src='https://i.imgur.com/5DDRIkN.png' alt='feather'/>
          <h1> Featured Species in {this.props.match.params.id} </h1>
          <div>{birdsInFamily}</div>
        </SpeciesContainer>
        <CenterButton><Link to={`/users/${this.props.match.params.userId}/`}>
            <Button>Back To Menu</Button></Link></CenterButton>
      </ShowOneContainer>
    )
  }
}
