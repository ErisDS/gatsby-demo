import React from 'react';
import Link from 'gatsby-link';

import '../styles/global';

import HeaderBar from '../components/HeaderBar';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export default ({ children, data }) => {
    return (
    <div>
        <HeaderBar title="test" />
        <Wrapper>
            {children()}
        </Wrapper>
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
