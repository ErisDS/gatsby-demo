import React from "react";
import Link from "gatsby-link";

export default ({data}) => {
    const post = data.contentfulArticle;
    console.log(post);
    return (
        <div>
            <Link to="/contentful/">&lt; Home</Link>
            <h1>{post.title}</h1>
            <pre>{post.body.body}</pre>
        </div>
    );
};

export const articleQuery = graphql`
    query ArticleQuery($slug: String!) {
        contentfulArticle(slug: { eq: $slug }) {
            title
            body {
                body
            }
            tags {
               id
               name
               slug
            }
        }
    }
`
