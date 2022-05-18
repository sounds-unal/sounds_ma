import { Text, View, StyleSheet, Image, TouchableOpacity , Alert} from 'react-native'
import logo1 from '../../assets/Sounds_logo.png'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo1} style={styles.image}/>
      <TouchableOpacity  onPress={()=> navigation.navigate("Play")}
        style={styles.button1}      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#143442" },
    title: { fontSize: 30, color: '#fff' },
    image: {width:300, height:300,resizeMode:'contain',overflow:'hidden'},
    button1:{backgroundColor: '#19DDFF', padding: 7, marginTop:10},
    buttonText: {color: '#AD4E00', fontSize: 20}
  })
export default Home