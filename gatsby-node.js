/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/PostTemplate.js`)
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
      console.log(result)
      result.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          path: `/posts/${edge.node.slug}`,
          component: postTemplate,
          context: {
            slug: edge.node.slug,
          }
        })
      })
      resolve()
    })
  })
}