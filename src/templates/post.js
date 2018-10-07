import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Post = props => {
  const post = props.data.contentfulPost
  const author = post.author
  const avatar = author.avatar
  return (
    <Layout>
      <h1>{post.title}</h1>
      {avatar && (
        <img width={40} height={40 / avatar.fixed.width * avatar.fixed.height} src={avatar.fixed.src} alt={author.name} />
      )}
      <small>
        {author.name} | {post.publishedAt}
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString:"YYYY/MM/DD")
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        avatar {
          fixed {
            width
            height
            src
          }
        }
      }
    }
  }
`
