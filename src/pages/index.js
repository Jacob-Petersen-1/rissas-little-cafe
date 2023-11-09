import * as React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>Home</h1>
      {data.fileInformation.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.base}</h2>
          <p>{node.prettySize}</p>
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
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
  }
`
