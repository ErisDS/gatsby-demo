import React from "react";
import Link from "gatsby-link";

export default ({data}) => {
    const post = data.ghostPost;
    console.log(post);
    return (
        <div>
            <Link to="/ghost/">&lt; Home</Link>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export const articleQuery = graphql`
    query PostQuery($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            title
            html
        }
    }
`
