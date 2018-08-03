import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Container from '../components/Container';
import PostCard from '../components/PostCard';

export default ({ data }) => {
    const posts = data.allContentfulArticle.edges;
    return (
        <Container>
            <header>
                <h1>Gatsby + Contentful Demo</h1>
                <p>Hosted on Netlify, this demo shows Gatsby pulling from a dummy Contentful blog-like structure that I setup.</p>
            </header>
            {posts.map(({ node }) => (
                <PostCard key={node.id} post={node} />
            ))}
        </Container>
    );
};

export const pageQuery = graphql`
  query CTFPostsQuery {
    allContentfulArticle(filter: { node_locale: { eq: "en-US" } }, sort: { order: DESC, fields: [publishedAt] }) {
      edges {
        node {
          id
          slug
          title
          tags {
               id
               name
               slug
            }
          publishedAt(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;
