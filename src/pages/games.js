import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const GAMES_LIST_QUERY = graphql`
  query GamesList {
    markdownRemark(frontmatter: { title: { regex: "/Games/" } }) {
      frontmatter {
        games
      }
    }
  }
`

const GamesPage = () => (
  <Layout>
    <StaticQuery
      query={GAMES_LIST_QUERY}
      render={({ markdownRemark }) => (
        <>
          {markdownRemark.frontmatter.games.split('\n').map(gameName => (
            <li>{gameName}</li>
          ))}
        </>
      )}
    />
  </Layout>
)

export default GamesPage
