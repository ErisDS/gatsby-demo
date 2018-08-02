const createNodeHelpers = require('gatsby-node-helpers').default;

const {
    createNodeFactory,
    generateNodeId,
    generateTypeName,
} = createNodeHelpers({
    typePrefix: `Ghost`,
})

const POST = `Post`;
const TAG = `Tag`;

module.exports.PostNode = createNodeFactory(POST);

module.exports.TagNode = createNodeFactory(TAG);
