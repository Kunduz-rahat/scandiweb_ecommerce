import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;