const fetch = require('node-fetch');
const queryString = require('query-string');

module.exports.fetchAllPosts = async (options) => {
    if(!options.clientId || !options.clientSecret || !options.adminUrl) {
        console.error('Plugin Configuration Missing: gatsby-source-ghost requires your adminUrl, clientId and clientSecret');
        return;
    }

    const baseApiUrl = `https://${options.adminUrl}/ghost/api/v0.1`;
    const postApiOptions = {
        client_id: options.clientId,
        client_secret: options.clientSecret,
        include: 'authors,tags',
        formats: 'plaintext,html',
        limit: 'all'
    };
    const postsApiUrl = `${baseApiUrl}/posts/?${queryString.stringify(postApiOptions)}`;

    return fetch(postsApiUrl)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }

           console.error('\nUnable to fetch data from your Ghost API. Perhaps your credentials or adminUrl are incorrect?');
           return res.json().then(err => {
               console.error('\nHTTP Error:', err);
               process.exit(1);
           });
        })
        .then(data => data.posts)
        .catch(err => {
            console.error('\nUnable to fetch data from your Ghost API. \nNetwork Error:', err);
            process.exit(1);
        });
};
