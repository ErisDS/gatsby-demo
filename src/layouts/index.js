import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `0.5rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

export default ({ children, data }) => {
    return (
    <div>
        <header style={{marginBottom: `1.5rem`, marginLeft: `0.5rem`}}>
            <Link to="/">
                <h3 style={{display: `inline`}}>{data.site.siteMetadata.title}</h3>
            </Link>
            <ul style={{listStyle: `none`, float: `right`}}>
                <ListLink to="/contentful/">Contentful</ListLink>
            </ul>
        </header>
        <div>
            {children()}
        </div>
    </div>
    );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
