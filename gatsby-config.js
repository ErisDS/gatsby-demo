let activeEnv = process.env.NODE_ENV || 'development';

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "Futureweb Demos"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-ghost`,
            options: {
                adminUrl: `newblog.ghost.io`,
                clientId: `ghost-frontend`,
                clientSecret: `${process.env.GH_CLIENT_SECRET}`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.CTF_SPACE_ID}`,
                accessToken: `${process.env.CTF_ACCESS_TOKEN}`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-netlify-cache`,
        `gatsby-plugin-netlify`
    ]
};
