import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulPost.edges.map(edge => {
      const author = edge.node.author
      return <div>
        <Link to={`/posts/${edge.node.slug}`}>{edge.node.title}</Link>

        {/* avatarは空のときもあるので三項演算子で処理する */}
        {edge.node.author.avatar &&
          <img width={40} src={author.avatar.resolutions.src} alt={author.name} />
        }
        <small>{author.name}</small>
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
        slug
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
