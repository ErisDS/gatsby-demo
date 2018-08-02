import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
    const posts = data.allGhostPost.edges;
    return (
        <div>
            <h1>Gatsby Ghost Demo</h1>
            {posts.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.slug}>
                        <h3>{node.title}</h3>
                    </Link>
                    <p>Posted on {node.published_at}</p>
                </div>
            ))}
        </div>
    );
};

export const pageQuery = graphql`
  query GhostPostsQuery {
    allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: 15) {
      edges {
        node {
          id
          slug
          title
          published_at(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;
