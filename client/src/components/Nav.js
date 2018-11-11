import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Icon } from 'semantic-ui-react'

const FeaturedImage = styled.div`
background: url('https://download.ams.birds.cornell.edu/api/v1/asset/122886361/1200');
background-size: cover;
`

const NavContainer = styled.div`
width: 100vw;
height: 40vh;
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 8vw;
background-image: linear-gradient(to bottom, black, transparent, transparent);
;
color: white;
`

const SiteTitle = styled.h1`
font-size: 2rem;
text-shadow: .25rem .25rem 1rem black;
`

const StyledLinkToUser = styled(Link)`
font-size: 1rem;
`

export default class Nav extends Component {

  render() {

    const userId = this.props.users.id

    return (
      <FeaturedImage>
      <NavContainer>
        
          <div>
            <SiteTitle onClick={this.props.refreshPage}>birdie</SiteTitle>
          </div>
          <div>
            <StyledLinkToUser to={`/users/${userId}/edit`}> 
            <Icon name="user outline" size="small" />
              {this.props.users.username}
          </StyledLinkToUser>
        </div>
    </NavContainer>
    </FeaturedImage>
    )
  }
}
