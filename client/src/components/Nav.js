import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import media from 'styled-media-query'

const FeaturedImage = styled.div`
background: url('https://download.ams.birds.cornell.edu/api/v1/asset/122886361/1200');
background-size: cover;


${media.greaterThan('medium')`
  background-position: center;
`}
`

const NavContainer = styled.div`
width: 100vw;
height: 25vh;
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

const Birdie = styled(Link)`
font-family: Lora;
font-size: 2rem;
text-shadow: .25rem .25rem 1rem black;
:hover {
  color: lightgray;
}
`

const StyledLinkToUser = styled(Link)`
font-size: 1.25rem;
text-shadow: .25rem .25rem 1rem black;
:hover {
  color: lightgray;
}
`

export default class Nav extends Component {

  state = {
    user: {}
  }

  render() {

    const userId = this.props.users.id

    return (
      <FeaturedImage>
        <NavContainer> 
          <div>
            <Birdie to={`/`}>birdie</Birdie>
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
