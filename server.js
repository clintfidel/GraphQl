import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import winston from 'winston'
import { makeExecutableSchema } from 'graphql-tools'

const app = express();
const port = process.env.PORT || 5600;

const typeDefs = `
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query : {
    greeting: () => 'Hello world!'
  }
};

const schema = makeExecutableSchema({typeDefs, resolvers})
app.use(bodyParser());
app.use(cors(), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/graphQl', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL  : '/graphQl' }))
app.get('*', (req, res) => {
    res.status(200).send('Welcome to learning GraphQL');
});


app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});