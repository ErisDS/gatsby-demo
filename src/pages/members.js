import React from 'react';
import styled from 'styled-components';
import netlifyIdentity from 'netlify-identity-widget';

export default class Membrtd extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){
        netlifyIdentity.open();
    }

    render() {
        return <div></div>
    }
}
