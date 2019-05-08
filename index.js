const express = require('express');
const { ApolloServer, gpl } = require('apollo-server-express');
const { schema, resolvers } = require('./schema');

const app = express();
const port = process.env.PORT || 3000;
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
    res.json({
        hello: 'world'
    });
});

app.listen({ port }, () => {
    console.log(`Server started at port ${port}`);
});
