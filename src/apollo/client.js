import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache({
    dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
});

export default client;