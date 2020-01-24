import { ApolloServer } from 'apollo-server';
import { connect, set } from 'mongoose';

import resolvers from './graphql/rootResolvers';
import typeDefs from './graphql/rootTypeDefs';

connect('mongodb://192.168.99.100:27017/semana-omnistack-10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

set('useNewUrlParser', true);
set('useFindAndModify', false);
set('useCreateIndex', true);
set('useUnifiedTopology', true);

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
