import * as React from "react"
import { Link, graphql } from "gatsby"
import { MainLayout } from "../components"

const HomePage = ({ data }) => {
  console.log(data)
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <ul>
        {data.events.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/events/${node.id}`}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}
export const Head = () => <head title="Home" />

export default HomePage

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
