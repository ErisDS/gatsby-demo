import React from "react";
import Link from "gatsby-link";
import Container from '../components/Container';


export default ({data}) => {
    const tag = data.ghostTag;

    console.log(data.allGhostPost);

    return (
        <Container>
            <Link to="/ghost/">&lt; Home</Link>
            <header>
                <h1>{tag.name}</h1>
            </header>
            <p>{tag.description}</p>
        </Container>
    );
};

export const articleQuery = graphql`
    query TagQuery($slug: String!) {
        ghostTag(slug: { eq: $slug }) {
          name        
        }
        allGhostPost(filter: {tags: {elemMatch: {slug: {eq: $slug}}}}){
            edges {
                node {
                    tags {
                        slug
                    }
                }
            }
            totalCount
        }
    }
`
