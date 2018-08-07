import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {

    return (
        <div style={{margin: `5rem auto`, width: `800px`}}>
            <div data-netlify-identity-menu="true"></div>
            <img src="https://source.unsplash.com/random/800x300" alt="" />
            <p>This little mini site is hosted on Netlify and contains demos of modern web tooling. Choose a demo from below:</p>

            <ul>
                <li>
                    <Link to="/contentful/">Gatsby + Contentful</Link>
                </li>
                <li>
                    <Link to="/ghost/">Gatsby + Ghost</Link>
                </li>
            </ul>

        </div>
    );
};

