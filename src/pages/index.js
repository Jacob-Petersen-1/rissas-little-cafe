import * as React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
      {data.events.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.location}</h2>
          <p>{node.frontmatter.title}</p>
        </div>
      ))}
      <Link to="/about">About</Link>
    </div>
  )
}
export const Head = () => <head title="Home" />

export default IndexPage

export const query = graphql`
  query {
    events: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            location
            time
            title
          }
          rawMarkdownBody
        }
      }
    }
  }
`
