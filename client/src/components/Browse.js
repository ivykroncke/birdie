import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Segment } from 'semantic-ui-react'
import axios from 'axios'
import ShowOneBird from './ShowOneBird';

const AllBrowseContainer = styled.div`
height: 100%;
`

const BrowseContainer = styled.div`
height: 60vh;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
`

const ButtonHelper = styled.div`
margin: 5vh;
`

export default class Browse extends Component {
    state = {
        taxonomy: true,
        common: false,
        featuredBird: {
            SpeciesUrl: ''
        }
    }

    // componentDidMount = async () => {
    //     await this.birdCategoriesToState()
    // }


    changeToViewOneBird = (SpeciesUrl) => {
        const featuredBird = { ...this.state.featuredBird }
        featuredBird.SpeciesUrl = SpeciesUrl
        this.setState({ taxonomy: !this.state.taxonomy, featuredBird })     
    }

    backToMenu = () => {
        this.props.toggleBrowse()
    }

  render() {

    const taxonomyList = this.state.birds.map((bird, i) => {
        const birdFamilyParams = bird.FamilyName.toLowerCase()
            return (
                <div key={i}>
                    <Segment>
                        <div><Link to={`/users/${this.props.userId}/birds/${birdFamilyParams}`} > {bird.FamilyCommonName} </Link></div>
                    </Segment>
                </div>
            )
    })

    return (
      <AllBrowseContainer>
        {this.state.taxonomy ? (
            <BrowseContainer>
                <h1>Browse</h1>
                <h3>Browse Taxonomic Categories Below</h3>
                    <Dropdown placeholder="select Family" fluid selection options={taxonomyList} />
            </BrowseContainer>)
            :
            (<ShowOneBird
                birds={this.state.birds}
                userId={this.props.userId}
                taxonomy={this.state.taxonomy}
                featuredBird={this.state.featuredBird}/>)}

        <ButtonHelper><Button onClick={this.backToMenu}> Back To Menu </Button></ButtonHelper>
      </AllBrowseContainer>
    )
  }
}
