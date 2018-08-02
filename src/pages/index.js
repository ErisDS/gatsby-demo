import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
    return (
    <div>
        <h1>Richard Hamming on Luck</h1>
        <div>
            <p>
                From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                You and Your Research
            </a>”.
            </p>
            <blockquote>
                <p>
                    There is indeed an element of luck, and no, there isn’t. The prepared
                    mind sooner or later finds something important and does it. So yes, it
                    is luck.{" "}
                    <em>
                        The particular thing you do is luck, but that you do something is
                        not.
                    </em>
                </p>
            </blockquote>
        </div>
        <img src="https://source.unsplash.com/random/400x200" alt="" />

        <div>
            <h1>Markdown stuff</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => {
                console.log(node);
                return (
                    <div key={node.id}>
                        <Link
                            to={node.fields.slug}
                            css={{ textDecoration: `none`, color: `inherit` }}
                        >
                            <h3>
                                {node.frontmatter.title}{" "}
                                <span style={{ color: '#bbb' }}>{node.frontmatter.date}</span>
                            </h3>
                        </Link>
                        <p>{node.excerpt}</p>
                    </div>
                )
            })}
        </div>
    </div>
    );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
