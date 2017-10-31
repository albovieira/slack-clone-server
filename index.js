/**
 * Created by albo on 30/10/17.
 */
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import models from './models'
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

/*read and load all schemas*/
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')))
/*read and load all resolvers*/
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

/* it creates a schema from my schema (definition) and resolver(execution) */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const PORT = 8082 ;
const  app = express();

const graphqlEndpoint = '/graphql'

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema: schema,
    context: {
      models, //all models available in graph context
      user:{ //temp, passing an id for test
        id:1
      }
    }
  })
);

/* it will dispose an UI endpoint to exec graphql  */
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint}));

/*it will start database */
//{force:true} param will drop and re-run the migration
models.sequelize.sync().then( () => {
  app.listen(PORT)
})

