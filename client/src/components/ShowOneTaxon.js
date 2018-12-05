import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const PageDiv = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const TaxonContainer = styled.div`
padding: 10vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

const Feather = styled.img`
height: 10vh;
`

const CenterButton = styled.div`
padding: 3vh;
`

const StyledH2 = styled.h2`
text-align: center;
`

const BirdImage = styled.img`
width: 40vw;
margin: 5vh;
`

export default class ShowOneTaxon extends Component {
    state = {
        taxon: {}
    }

    fixImage = async (SpeciesData) => {
      const img = SpeciesData.Profile.Image.URL
      SpeciesData.ImageURL = img
      this.setState({ taxon: SpeciesData })
    }

    componentDidMount = async () => {
        const birdId = this.props.match.params.birdId
        const taxonId = this.props.match.params.id
        const taxonData = await axios.get(`/api/birds/${birdId}/taxons/${taxonId}`)
        const SpeciesData = taxonData.data.Species
        this.fixImage(SpeciesData)
    }

  render() {
    const img = this.state.taxon.ImageURL
    console.log(this.state.taxon.ImageURL)

    return (
      <PageDiv>
        <TaxonContainer>

          <Feather src='https://i.imgur.com/5DDRIkN.png' alt='feather'/>
          <div>
            <h1>{this.state.taxon.AcceptedCommonName}</h1>
            <StyledH2>Family: {this.state.taxon.FamilyCommonName}</StyledH2>
          </div>
          <BirdImage src={img} alt="bird" />
          <div>Scientific Name: {this.state.taxon.ScientificName}</div>
          <div>Discovered By: {this.state.taxon.TaxonomyAuthor}/</div>
        </TaxonContainer>
        <CenterButton><Link to={`/users/${this.props.match.params.userId}/birds/${this.props.match.params.birdId}/`}>
            <Button>Back</Button></Link></CenterButton>
      </PageDiv>
    )
  }
}
