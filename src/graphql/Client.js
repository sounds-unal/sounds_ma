import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client'



export const client = new ApolloClient({
    //uri: 'http://localhost:5000/graphql',
    uri:  'http://192.168.0.10:5000/graphql',
    cache: new InMemoryCache(),
  })