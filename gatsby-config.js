module.exports = {
    siteMetadata: {
        title: "Testy McTestface"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ]
};
