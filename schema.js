const { gql } = require('apollo-server-express');

const schema = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello() {
            return 'world';
        }
    }
};

module.exports = {
    schema,
    resolvers,
}
