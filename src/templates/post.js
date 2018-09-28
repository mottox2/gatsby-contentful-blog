import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default (props) => {
  const post = props.data.contentfulPost
  return <Layout>
    <h2>{post.title}</h2>
    <div dangerouslySetInnerHTML={{__html: post.content.content}}/>
  </Layout>
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      slug
      title
      content {
        content
        childMarkdownRemark {
          html
        }
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
`
