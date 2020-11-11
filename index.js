const {ApolloServer, PubSub} = require('apollo-server');
const mongoose = require('mongoose');




const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs')
const {MONGODB} = require('./config.js');

const pubsub = new PubSub();



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
});

// CONNECT to mongo DB server
mongoose.connect(MONGODB, {useNewUrlParser :true, useUnifiedTopology: true})
    .then(() =>{
        console.log("MONGO DB connected");
        return server.listen({port:5000});
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });