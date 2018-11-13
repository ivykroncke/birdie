import React, { Component } from 'react'
import Nav from './Nav';
import AllPostsById from './AllPostsById'
import styled from 'styled-components'
import DashMenu from './DashMenu';
import axios from 'axios'

import Browse from './Browse';
import NewPost from './NewPost';
import AllPostsByAllUsers from './AllPostsByAllUsers';

const DashContainer = styled.div`
height: 100%;
width: 100vw;
`

export default class Dashboard extends Component {
  state = {
    users: {},
    posts: [],
    showUserPosts: false,
    showBrowse: false,
    showNewPost: false,
    showAllPostsByAllUsers: false,
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

  updateState = async (filteredGeorgiaBirds) => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    const postResponse = await axios.get(`/api/users/${userId}/posts/`)
    console.log(response.data)
    this.setState({ 
      users: response.data, 
      posts: postResponse.data,
      birds: filteredGeorgiaBirds })
  }

filterGeorgiaBirds = (birdData) => {
  const filteredGeorgiaBirds = birdData.filter(bird => {
      return (
          this.state.georgiaBirds.includes(bird.FamilyCommonName)
      )
  })
  this.updateState(filteredGeorgiaBirds)
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

birdCategoriesToState = async () => {
  const response = await axios.get(`/api/birds`)
  const birdData = response.data.Family
  this.setState({birds: birdData})
  this.commonNameToLowerCase()
}

  componentDidMount = async() => {
    await this.birdCategoriesToState()
  }

  toggleAllPostsById = () => {
    this.setState({
      showUserPosts: !this.state.showUserPosts
    })
  }

  toggleBrowse = () => {
    this.setState({
      showBrowse: !this.state.showBrowse
    })
  }

  toggleShowNewPost = () => {
    this.setState({
      showNewPost: !this.state.showNewPost
    })
  }

  toggleAllPostsByAllUsers = () => {
    this.setState({
      showAllPostsByAllUsers: !this.state.showAllPostsByAllUsers
    })
  }

  render() {

    return (

      <DashContainer>

       <Nav 
        users={this.state.users} 
        arbitraryToggle={this.arbitraryToggle} 
        userId={this.props.match.params.id}
        refreshPage={this.refreshPage}
        />

       { !this.state.showBrowse && 
          !this.state.showUserPosts &&
          !this.state.showNewPost &&
          !this.state.showAllPostsByAllUsers 
          ? 
          (<DashMenu 
            toggleBrowse={this.toggleBrowse} 
            toggleAllPostsById={this.toggleAllPostsById}
            toggleShowNewPost={this.toggleShowNewPost}
            toggleAllPostsByAllUsers={this.toggleAllPostsByAllUsers}
            />) : null 
        }

        { this.state.showUserPosts ? 
          (<div>
              <AllPostsById 
                posts={this.state.posts}
                toggleAllPostsById={this.toggleAllPostsById}
                userId={this.props.match.params.id} />
            </div>)
          : null
        }       

        { this.state.showBrowse ?
          (<Browse 
          toggleBrowse={this.toggleBrowse}  
          userId={this.props.match.params.id}
          birds={this.state.birds}/>) : null  
        }

        { this.state.showNewPost ?
          (<NewPost 
          userId={this.props.match.params.id}
          toggleShowNewPost={this.toggleShowNewPost}
          toggleAllPostsById={this.toggleAllPostsById}
          updateState={this.updateState} 
          birds={this.state.birds} />) : null
        }

        { this.state.showAllPostsByAllUsers ?
          (<AllPostsByAllUsers
            toggleAllPostsByAllUsers={this.toggleAllPostsByAllUsers} />) : (null )
        }

      </DashContainer>
    )
  }
}
