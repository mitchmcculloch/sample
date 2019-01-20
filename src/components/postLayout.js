// import React, { Component } from 'react'
// import Layout from './layout'
// import { graphql } from 'gatsby'

// //Static Query
// //Used anywhere!  But, does not accept variables, can't use context

// //Page Query
// //Must be used on pages (in ./pages directory, or created via `creatPages` in gatsby-node.js)

// export default class PostLayout extends Component {
//   render() {
//     const { markdownRemark } = this.props.data
//     const { location } = this.props
//     return (
//       <Layout location={location}>
//         <div>
//           <h1>{markdownRemark.frontmatter.title}</h1>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: markdownRemark.html,
//             }}
//           />
//         </div>
//       </Layout>
//     )
//   }
// }

// export const query = graphql`
//   query PostQuery($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `
