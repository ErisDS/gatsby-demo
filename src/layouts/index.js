import React from "react";
import Link from "gatsby-link";
import Container from "../components/container";

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({ children, data }) => (
    <Container>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/counter/">Counter</ListLink>
            </ul>
        </header>
        {children()}
    </Container>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
