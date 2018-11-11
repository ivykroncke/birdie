import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import media from 'styled-media-query'

// Styled Media Query Sizes: 
// {
//   huge: '1440px',
//   large: '1170px',
//   medium: '768px',
//   small: '450px',
// }
// lessThan(breakpoint | size)
// greaterThan(breakpoint | size)
// between(firstBreakpoint | firstSize, lastBreakpoint | lastSize)

const FeaturedImage = styled.div`
background: url('https://download.ams.birds.cornell.edu/api/v1/asset/122886361/1200');
background-size: cover;


${media.greaterThan('medium')`
  background-position: center;
`}
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

${media.greaterThan('medium')`
  height: 20vh;
`}
${media.greaterThan('small')`
  height: 30vh;
`}
`

const SiteTitle = styled.h1`
font-size: 2rem;
text-shadow: .25rem .25rem 1rem black;
:hover {
  color: lightgray;
}
`

const StyledLinkToUser = styled(Link)`
font-size: 1.75rem;
text-shadow: .25rem .25rem 1rem black;
:hover {
  color: lightgray;
}
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
