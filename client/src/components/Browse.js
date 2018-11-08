import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

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
        birds: [
            {name: "Bluejay",
            description: "noisy as all get out"},
            {name: "Cardinal",
            description: "bossy but that is okay."},
            {name: "Oriole",
            description: "The doge of birds."}
        ]
    }

  render() {

    const birdList = this.state.birds.map((bird, i) => {
        return (
            <BirdDiv key={i}>
                <TextDiv>
                    <div>{bird.name}</div>
                    <div>{bird.description}</div> 
                </TextDiv>
                <AddButton>Add</AddButton>
            </BirdDiv>
        )
    })

    return (
      <BrowseContainer>
        <h1>Browse</h1>
        <h2>Browse below to add a bird to your collection!</h2>
        {birdList}
      </BrowseContainer>
    )
  }
}
