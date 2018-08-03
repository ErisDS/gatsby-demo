const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    const loadArticles = new Promise((resolve, reject) => {
        graphql(`
          {
            allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then(result => {
            result.data.allContentfulArticle.edges.forEach(({ node }) => {

                createPage({
                    path: `/contentful/${node.slug}/`,
                    component: path.resolve(`./src/templates/ctf-article.js`),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        })
    });

    const loadPosts = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then(result => {
            result.data.allGhostPost.edges.forEach(({ node }) => {

                createPage({
                    path: `/ghost/${node.slug}/`,
                    component: path.resolve(`./src/templates/gh-post.js`),
                    context: {
                        slug: node.slug,
                    },
                })
            })
            resolve()
        });
    });

    return Promise.all([loadArticles, loadPosts]);
};
