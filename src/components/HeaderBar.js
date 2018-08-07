import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import netlifyIdentity from 'netlify-identity-widget';

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
    
    li {
      display: inline-block;
      margin: 0;
      padding-left: 1rem;
    }
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

export default class HeaderBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loggedIn: false,
            username: ''
        }
    }

    componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();

        if(netlifyIdentity.currentUser() != null){
            this.setState({loggedIn: true});
            this.setState({username: user.user_metadata.full_name});
        }

        netlifyIdentity.on("login", user => this.setState({loggedIn: true}));
        netlifyIdentity.on("logout", () => this.setState({loggedIn: false}));

    }

    render() {
        const props = this.props;
        return (
            <Header>
                <Title><Link to="/">{props.title}</Link></Title>
                <List>
                    <ListLink to="/contentful/">Contentful</ListLink>
                    <ListLink to="/ghost/">Ghost</ListLink>
                    <ListLink to="/members/">{this.state.loggedIn ? this.state.username : 'Members'}</ListLink>
                </List>
            </Header>
        )
    }
}


