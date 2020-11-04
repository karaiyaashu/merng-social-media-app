const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');



const Post = require('./models/Posts');

const {MONGODB} = require('./config.js');




const typeDefs = gql `
    type Post {
        id:ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
       getPosts: [Post]

    }
`;
const resolvers = {
    Query:{
       async getPosts(){
            try{
                const posts = await Post.find();
                return posts;
            }
            catch (errr){
                throw new Error(errr);
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
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