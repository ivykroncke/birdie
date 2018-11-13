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

export default class ShowOneTaxon extends Component {
    state = {
        taxon: {}
    }

    componentDidMount = async () => {
        const birdId = this.props.match.params.birdId
        const taxonId = this.props.match.params.id
        const taxonData = await axios.get(`/api/birds/${birdId}/taxons/${taxonId}`)
        this.setState({ taxon: taxonData.data.Species })
    }

  render() {

    return (
      <PageDiv>
        <TaxonContainer>
          <Feather src='https://i.imgur.com/5DDRIkN.png' alt='feather'/>
          <div>
            <h1>{this.state.taxon.AcceptedCommonName}</h1>
            <h2>Family: {this.state.taxon.FamilyCommonName}</h2>
          </div>
        {/* <div>{this.state.taxon.Profile.Image}</div> */}
        </TaxonContainer>
        <CenterButton><Link to={`/users/${this.props.match.params.userId}/birds/${this.props.match.params.birdId}/`}>
            <Button>Back</Button></Link></CenterButton>
      </PageDiv>
    )
  }
}
