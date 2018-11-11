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
        taxonomy: false,
        common: false,
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
        console.log("bird data before for loop", birdData)
        birdData.forEach(bird => {
            let changeBirds = { ...bird }
            changeBirds.FamilyCommonName = changeBirds.FamilyCommonName.toLowerCase()
            birdsToLowerCase.push(changeBirds)
        })
        birdData = birdsToLowerCase
        //pass along the version of state with the common name lowercased
        this.filterGeorgiaBirds(birdData)
    }

    filterGeorgiaBirds = (birdData) => {
        const filteredGeorgiaBirds = birdData.filter(bird => {
            return (
                this.state.georgiaBirds.includes(bird.FamilyCommonName)
            )
        })
        console.log(filteredGeorgiaBirds)
    }

    filterCommonBirds = () => {
        console.log("This will be a list of common backyard birds")
    }

        //this function populates state with bird data
        birdCategoriesToState = async () => {
            const response = await axios.get(`/api/birds`)
            const birdData = response.data.Family
            this.setState({birds: birdData})
            this.commonNameToLowerCase()
            //these are switches for what to do next
            // if(this.state.taxonomy) {
            //     this.commonNameToLowerCase()
            // } else if(this.state.common) {
            //     this.filterCommonBirds()
            // }
        }

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
