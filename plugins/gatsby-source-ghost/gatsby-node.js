const GhostAPI = require('./api');
const PostNode = require('./nodes').PostNode;

exports.sourceNodes = async ({ boundActionCreators, createNodeId }, configOptions) => {
    const { createNode } = boundActionCreators;

    let posts = await GhostAPI.fetchAllPosts(configOptions);

    posts.forEach(post => {
        const postNode = PostNode(post);
        createNode(postNode);
    });
};
