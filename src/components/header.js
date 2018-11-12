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
  padding: 0.4rem;
  display: grid;
  grid-template-columns: 1fr 5fr;
  h1 {
    padding-left: 4rem;
    padding-top: 1.2rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <img src={logo} alt="A game logo" style={{ width: '150px' }} />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
