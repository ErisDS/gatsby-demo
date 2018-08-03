import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Header = styled.header`
    background: #323232;
    color: #fff;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    
     a {
        &:hover {
        color: #ffff00;
        text-decoration:none;    
    }
`

const List = styled.ul`
    list-style: none;
    float: right;
    margin-right: 15px;
    padding: 0;
`

const ListLinkItem = styled.li`
    display: inline-block;
    margin: 0;
    padding-left: 1rem;
    
    &:not(:last-child)::after {   
       content: ' |';
    }
    a {
       padding-right: 5px;
    }
`

const Title = styled.h3`
    display:inline;
    margin-left: 15px;
`

const ListLink = props =>
    <ListLinkItem>
        <Link to={props.to}>
            {props.children}
        </Link>
    </ListLinkItem>

const HeaderBar = props => {
    return (
        <Header>
            <Title><Link to="/">{props.title}</Link></Title>
            <List>
                <ListLink to="/contentful/">Contentful</ListLink>
                <ListLink to="/ghost/">Ghost</ListLink>
            </List>
        </Header>
    );
}

export default HeaderBar;

