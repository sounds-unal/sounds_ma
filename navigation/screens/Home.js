import { Text, View, StyleSheet, Image, TouchableOpacity , Screen,Alert} from 'react-native'
import logo1 from '../../assets/Sounds_logo.png'
import React from 'react'
import SingInModal from '../../src/components/SingInModal'
import SingUpModal from '../../src/components/SingUpModal'

const state = {
  optionModalVisible: false
}
const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisibleUp, setModalVisibleUp] = React.useState(false);
  return (
      <>
    <View style={styles.container}>
      <Image source={logo1} style={styles.image}/>
      <TouchableOpacity  onPress={ ()=> { setModalVisible(true)}}
        style={styles.button1}      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ ()=> { setModalVisibleUp(true)}}
        style={styles.button1}  >
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
      <SingInModal visible={modalVisible} setVisible={setModalVisible} 
    />
      <SingUpModal visible={modalVisibleUp} setVisible={setModalVisibleUp} navigation={navigation}/>
    </View>
    
    </>
    
    
  )
}

const modals = async navigation  => {
  if (state.optionModalVisible){
  console.log("en el true")
   state.optionModalVisible = false
   Home(navigation)


  }else {
    console.log("en el false")
    state.optionModalVisible = true
     }
  
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#0084C2" },
    title: { fontSize: 30, color: '#fff' },
    image: {width:300, height:300,resizeMode:'contain',overflow:'hidden'},
    button1:{backgroundColor: '#19DDFF', padding: 7, marginTop:10, borderRadius: 10}, 
    buttonText: {color: '#AD4E00', fontSize: 20}
  })
export default Home