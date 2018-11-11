import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

const BrowseContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
margin: 10vw;
`

const BirdDiv = styled.div`
text-align: center;
background-color: lightgray;
width: 90vw;
padding: 2vw;
margin: 2vw;
color: white;
`

const TextDiv = styled.div`
margin: 2rem;
`

const AddButton = styled(Button)`
margin: 5rem;
`

export default class Browse extends Component {
    state = {
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

    birdCategoriesToState = async () => {
        const response = await axios.get(`/api/birds`)
        //This logs an array of all bird families straight from the API as objects.
        //One of the keys is FamilyCommonName - which I want to match to my georgiaBirds array
        const birdData = response.data.Family
        console.log(birdData)
        // const newBirdData = birdData.map(bird => {
        //     bird.FamilyCommonName.toLowerCase()
        // })
        // this.setState({birds: newBirdData})
        // console.log("All Birds", this.state.birds)
        // this.filterGeorgiaBirds()
    }

    // filterGeorgiaBirds = () => {
    //     const filteredGeorgiaBirds = this.state.birds.filter(bird => {
    //         return (
    //             this.state.georgiaBirds.includes(bird.FamilyCommonName)
    //         )
    //     })
    //     console.log(filteredGeorgiaBirds)
    // }

  render() {

    // const birdList = this.state.birds.map((bird, i) => {
    //         return (
    //             <BirdDiv key={i}>
    //                 <TextDiv>
    //                     {bird.FamilyCommonName}
    //                 </TextDiv>
    //                 <AddButton>Add</AddButton>
    //             </BirdDiv>
    //         )
    // })

    return (
      <BrowseContainer>
        <h1>Browse</h1>
        <h2>Browse below to add a bird to your collection!</h2>
        {/* {birdList} */}
      </BrowseContainer>
    )
  }
}
