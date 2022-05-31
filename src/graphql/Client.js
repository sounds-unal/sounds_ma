import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import getEnvVars from './config'

const Api_uri = getEnvVars();
const localhost = Api_uri.API_URL;
console.log(localhost)
export const client = new ApolloClient({
    //uri:  'http://192.168.0.8:5000/graphql',
    //uri: localhost,
    uri: 'https://sounds-ag-z5fiut5qsa-uc.a.run.app/graphql',
    cache: new InMemoryCache(),
  })