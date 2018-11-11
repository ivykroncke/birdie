import styled from 'styled-components'

//Featured in components: Home.js and Login.js
export const HomeWrapper = styled.div`
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-color: black;
background-image: url('https://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`

//Featured in Login.js
export const LightBackground = styled.div`
height: 100vh;
width: 80vw;
margin: 5vh 5vw;
background-color: rgba(211, 216, 214, .5);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`