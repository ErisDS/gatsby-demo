import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
    const posts = data.allContentfulArticle.edges;
    return (
        <div>
            <h1>Gatsby Contentful Demo</h1>
            {posts.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.slug}>
                        <h3>{node.title}</h3>
                    </Link>
                    <p>Tagged with: {node.tags.map(tag => (
                        <span key={tag.id} style={{marginLeft: `0.5rem`}}>{tag.name}</span>
                    ))}
                    </p>
                    <p>Posted on {node.publishedAt}</p>
                </div>
            ))}
        </div>
    );
};

export const pageQuery = graphql`
  query IndexQuery {
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
