import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import ShowOneBird from './ShowOneBird';

const BrowseContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
margin: 10vw;
`

export default class Browse extends Component {
    state = {
        taxonomy: true,
        common: false,
        featuredBird: {
            SpeciesUrl: ''
        },
        birds: [],
        georgiaBirds: [ "ducks, geese, and waterfowl", 
        "chachalacas",
        "new world quail",
        "pheasants, grouse, and allies",
        "grebes",
        "pigeons and doves",
        "cuckoos and anis",
        "nightjars and allies",
        "swifts",
        "hummingbirds",
        "rails, gallinules, and coots",
        "limpkin",
        "cranes",
        "stilts and avocets",
        "oystercatchers",
        "lapwings and plovers",
        "sandpipers and allies",
        "skuas and jaegers",
        "alcids",
        "gulls, terns, and skimmers",
        "tropicbirds",
        "loons",
        "southern storm-petrels",
        "northern storm-petrels",
        "fulmars, petrels, and shearwaters",
        "storks",
        "frigatebirds",
        "boobies and gannets",
        "cormorants",
        "anhingas",
        "pelicans",
        "bitterns, herons, and egrets",
        "ibises and spoonbills",
        "new world vultures",
        "osprey",
        "hawks, kites, and eagles",
        "barn-owls",
        "typical owls",
        "kingfishers",
        "woodpeckers",
        "falcons and caracaras",
        "tyrant flycatchers",
        "shrikes",
        "vireos",
        "jays, crows, magpies, and ravens",
        "larks",
        "swallows and martins",
        "chickadees and titmice",
        "nuthatches",
        "treecreepers",
        "wrens",
        "gnatcatchers",
        "kinglets",
        "old world flycatchers",
        "thrushes",
        "mockingbirds and thrashers",
        "starlings",
        "waxwings",
        "old world sparrows",
        "pipits",
        "finches",
        "longspurs and snow buntings",
        "new world sparrows",
        "yellow-breasted chat",
        "icterids",
        "wood-warblers",
        "cardinals and allies" ]
    }

    componentDidMount = async () => {
        await this.birdCategoriesToState()
    }

    commonNameToLowerCase = () => {
        const birdsToLowerCase = []
        let birdData = this.state.birds
        birdData.forEach(bird => {
            let changeBirds = { ...bird }
            changeBirds.FamilyCommonName = changeBirds.FamilyCommonName.toLowerCase()
            birdsToLowerCase.push(changeBirds)
        })
        birdData = birdsToLowerCase
        this.filterGeorgiaBirds(birdData)
    }

    filterGeorgiaBirds = (birdData) => {
        const filteredGeorgiaBirds = birdData.filter(bird => {
            return (
                this.state.georgiaBirds.includes(bird.FamilyCommonName)
            )
        })
        this.setState({birds: filteredGeorgiaBirds})
    }

    filterCommonBirds = () => {
        //placeholder for suggested birds
    }

        //this function populates state with bird data
        birdCategoriesToState = async () => {
            const response = await axios.get(`/api/birds`)
            const birdData = response.data.Family
            this.setState({birds: birdData})
            this.commonNameToLowerCase()
            // these are switches for what to do next
            if(this.state.taxonomy) {
                this.commonNameToLowerCase()
            } else if(this.state.common) {
                this.filterCommonBirds()
            }
        }

    changeToViewOneBird = (SpeciesUrl) => {
        const featuredBird = { ...this.state.featuredBird }
        featuredBird.SpeciesUrl = SpeciesUrl
        console.log(featuredBird.SpeciesUrl)
        this.setState({ taxonomy: !this.state.taxonomy, featuredBird })     
    }

  render() {

    const birdList = this.state.birds.map((bird, i) => {
        const SpeciesUrl = bird.SpeciesUrl
            return (
                <Button onClick={()=>this.changeToViewOneBird(SpeciesUrl)} key={i}>
                        <div>{bird.FamilyCommonName}</div>
                </Button>
            )
    })

    return (
      <div>
        {this.state.taxonomy ? (
            <BrowseContainer>
                <h1>Browse</h1>
                <h3>Browse Taxonomic Categories Below</h3>
                {birdList}
            </BrowseContainer>)
            :
            (<ShowOneBird
                birds={this.state.birds}
                userId={this.props.userId}
                taxonomy={this.state.taxonomy}
                featuredBird={this.state.featuredBird}/>)}
      </div>
    )
  }
}
