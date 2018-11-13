import React, { Component } from 'react'
import axios from 'axios'

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

    // const alternateNames = this.state.taxon.AlternateCommonName.map((name, i) => {
    //     return (
    //     <div key={i}>
    //         <li> {name} </li>
    //     </div>
    //     )
    // })

    return (
      <div>
        <h1>{this.state.taxon.AcceptedCommonName}</h1>
        {/* <div>Other common names: </div>
        <ul>{alternateNames}</ul> */}
      </div>
    )
  }
}
