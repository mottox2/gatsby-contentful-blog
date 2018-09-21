import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulPost.edges.map(edge => {
      return <div>
        <h2>{edge.node.title}</h2>
        {/* avatarは空のときもあるので三項演算子で処理する */}
        {edge.node.author.avatar &&
          <img width={40} src={edge.node.author.avatar.resolutions.src}/>
        }
        <small>{edge.node.author.name}</small>
        <p>{edge.node.content.content}</p>
      </div>
    })}
  </Layout>
)

export const query = graphql`
{
  allContentfulPost {
    edges {
      node {
        title
        content {
          content
        }
        author {
          name
          description {
            description
          }
          avatar {
            resolutions {
              width
              height
              src
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
