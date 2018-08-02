const fetch = require('node-fetch');
const queryString = require('query-string');

module.exports.fetchAllPosts = async (options) => {
    const baseApiUrl = `https://${options.adminUrl}/ghost/api/v0.1`;

    if(!options.clientId || !options.clientSecret) {
        console.error('gatsby-source-ghost requires a clientId and clientSecret');
        return;
    }

    const baseApiOptions = {
        client_id: options.clientId,
        client_secret: options.clientSecret,
        limit: 'all'
    };

    let response, json;

    try {
        response = await fetch(`${baseApiUrl}/posts/?${queryString.stringify(baseApiOptions)}`);
        json = await response.json();
    } catch (e) {
        // @TODO: better error handling
        console.error('gatsby-source-ghost error on fetch', err);
        json = {posts: []};
    }

    return json.posts;
};
