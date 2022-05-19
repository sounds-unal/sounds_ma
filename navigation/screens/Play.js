import { View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import {Query, useQuery, GraphQLRequest,gql} from '@apollo/client'



const Play = ( {navigation} ) => {
 
  return (
   <View style={styles.container}>
     {getsongs()}
     
   </View>
      
 
  )
}

export  function  getsongs(){

    const data = useQuery( gql`
    query callsongs{
    update{
      id
      song_name
      song_path
      song_liryc
      artist
      
    }}`);
    if (data.loading  ) {
      
      return <Text>Cargando ..... </Text>
    }
    if (data.error){
      return <Text>Ocurrió un error </Text>
    }
    return (
      <View>
        {data.data.update.map((post) => (
          <View key={post.id} style = {styles.song_one}>
            <Text style={styles.itemText}>{post.song_name}</Text>

          </View>
        ))}

      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 30,
    backgroundColor: "#0084C2"
  },
  song_one:{
    flexDirection:"row",
    padding:10,
    backgroundColor: "#143442"
  },
  itemText: {color: '#AD4E00', fontSize: 20}
  
})

export default Play 