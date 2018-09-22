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
                    }
                })
            })
            resolve()
        })
    });

    function createGhostPage(node, type) {
        // @TODO use shared permalinker tool
        const prefix = type === 'tag' ? 'tag/' : '';
        const permalink = `/ghost/${prefix}${node.slug}/`;

        createPage({
            path: permalink,
            component: path.resolve(`./src/templates/gh-${type}.js`),
            context: {
                slug: node.slug,
            }
        });
    }

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
            result.data.allGhostPost.edges.forEach(({node}) => createGhostPage(node, 'post'));
            resolve();
        });
    });

    const loadPages = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostPage {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then(result => {
            result.data.allGhostPage.edges.forEach(({ node }) => createGhostPage(node, 'page'));
            resolve();
        });
    });

    const loadTags = new Promise((resolve, reject) => {
        graphql(`
          {
            allGhostTag {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then(result => {
            result.data.allGhostTag.edges.forEach(({ node }) => createGhostPage(node, 'tag'));
            resolve();
        });
    });

    return Promise.all([loadArticles, loadPosts, loadPages, loadTags]);
};
