import React from "react";
import Link from "gatsby-link";
import Container from '../components/Container';
import Post from '../components/Post';

export default ({data}) => {
    const post = data.ghostPage;
    return (
        <Container>
            <Link to="/ghost/">&lt; Home</Link>
            <header>
                <h1>{post.title}</h1>
            </header>

            <Post>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Post>

        </Container>
    );
};

export const articleQuery = graphql`
    query PageQuery($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
          title         
          plaintext
          html
        }
    }
`
