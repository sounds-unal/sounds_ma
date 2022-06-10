import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity , Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ApolloProvider } from '@apollo/client'
import MainStack from './navigation/MainStack';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { RestLink } from 'apollo-link-rest'
import { client } from './src/graphql/Client';

export const BusquedaContext = React.createContext()



const App = () => {
  const [visibleWait,setVisWait] = React.useState(false)
  return (
    <BusquedaContext.Provider value={{visibleWait, setVisWait}}>
  <ApolloProvider client={client}>
    <MainStack />
  </ApolloProvider>
  </BusquedaContext.Provider>
  );
};


export default App ; 