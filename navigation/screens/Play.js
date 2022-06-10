import { View, Text , StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {Query, useQuery, GraphQLRequest,gql} from '@apollo/client'
import {Audio} from 'expo-av'
import AudioListItem from '../../src/components/AudioListItem'
import {BusquedaContext} from '../MainStack'


const state={
  playbackObj: null,
  soundObj: null,
  currentAudio: {},
}



const Play = ( {navigation} ) => {
  
  return (
   <View style={styles.container}>
     {getsongs()}
   </View>
      
 
  )
}

const playTrack = async audio => {
  // playing audio for the first time.
  if (state.soundObj === null){
    const playbackObj = new Audio.Sound();
    const sound = await playbackObj.loadAsync(
      { uri: audio.song_path },
      { shouldPlay: true }
    );
      return (
        state.currentAudio=audio,
        state.playbackObj=playbackObj,
        state.soundObj=sound,
        console.log('Playing Sound: ')
      )
    
  }

  // pause audio
  if (state.soundObj.isLoaded && state.soundObj.isPlaying && state.currentAudio.id === audio.id ){
    const sound = await state.playbackObj.setStatusAsync({shouldPlay: false})
    return (
      state.soundObj=sound,
      console.log('Pause Sound')
    )
  }

  // resume audio
  if (state.soundObj.isLoaded && !state.soundObj.isPlaying && state.currentAudio.id === audio.id ){
    const status = await state.playbackObj.playAsync()
    return(
      state.soundObj = status
    )
  }

  // new song
  else {
    state.playbackObj.unloadAsync()
    const sound = await state.playbackObj.loadAsync(
      { uri: audio.song_path },
      { shouldPlay: true }
    );
      return (
        state.currentAudio=audio,
        state.soundObj=sound,
        console.log('Playing Sound: ')
      )
  }
  
    
  }

export  function  getsongs(setVisible){
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
      return <Text>cargando ...</Text>
      
    }
    if (data.error){
      console.log('Error al conectar a la base: ', data.error)
      return <Text>Ocurrió un error </Text>
    }
    return (
      
      <ScrollView>
        {data.data.update.map((post) => (
          <TouchableOpacity key={post.id}  onPress={()=>{playTrack(post)}}>
            <>
            <AudioListItem title={post.song_name} />
            </>
          </TouchableOpacity>
        
        ))}

      </ScrollView>
      
    )
    
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 10,
    paddingTop: 30, 
    backgroundColor: "#0084C2"
  },
  song_one:{
    flexDirection:"row",
    padding:10,
    backgroundColor: "#143442"
  },
  itemText: {color: '#AD4E00', fontSize: 15}
  
})

export default Play 