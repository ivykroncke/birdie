import React, { Component } from 'react'
import axios from 'axios';

export default class ShowOneBird extends Component {

  componentDidMount = async () => {
    const birdData = await axios.get(`/api/birds/${this.props.match.params.id}`)
    console.log("where axios call is going", this.props.match.params)
    console.log(birdData.data)
  }

  render() {
    return (
      <div>
        show dat bird
      </div>
    )
  }
}
