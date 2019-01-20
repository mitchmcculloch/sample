import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/agame-logo.jpeg'

const HeaderWrapper = styled.div`
  background: #f47920;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 18rem;
  padding: 0.4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  a {
    color: white;
    text-decoration: none;
  }
  h1 {
    padding-left: 4rem;
    padding-top: 1.2rem;
  }
  img {
    height: 14rem;
    vertical-align: middle;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to="/games">Games!</Link>
      <Link to="/">
        <img src={logo} alt="A game logo" />
      </Link>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
