const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      image: File @link(from: "fields.localFile")
    }

    type Frontmatter {
    title: String!
    image: String!
    instagram: String!
    instagramLink: String!
    facebook: String!
    facebookLink: String!
    about: String!
    headline: String!
    position: String!
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.image !== null &&
    node.frontmatter.image !== undefined
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.image,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  }
};
