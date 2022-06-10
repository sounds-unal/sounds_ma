import { Text, View, StyleSheet, Image, TouchableOpacity , Screen,Alert} from 'react-native'
import logo1 from '../../assets/Sounds_logo.png'
import React from 'react'
import SingInModal, {values} from '../../src/components/SingInModal'
import SingUpModal from '../../src/components/SingUpModal'
import WaitModal from '../../src/components/waitModal'

const state = {
  optionModalVisible: false
}
const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisibleUp, setModalVisibleUp] = React.useState(false);
  const [modalVisibleWait, setModalVisibleWait]= React.useState(false);
  const [tipo, setTipo] = React.useState('');
  return (
      <>
    <View style={styles.container}>
      <Image source={logo1} style={styles.image}/>
      <TouchableOpacity  onPress={ ()=> { setTipo('log'), setModalVisible(true)}}
        style={styles.button1}      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ ()=> { setModalVisibleUp(true)}}
        style={styles.button1}  >
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
      <SingInModal visible={modalVisible} setVisible={setModalVisible} setVisibleWait={setModalVisibleWait} tipo={setTipo} />
      <SingUpModal visible={modalVisibleUp} setVisible={setModalVisibleUp} navigation={navigation}/>
      <WaitModal visible={modalVisibleWait} setVisible={setModalVisibleWait} user={values.user} tipo={tipo} password={values.password}  navigation={navigation} />
    </View>
    
    </>
    
    
  )
}



const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#0084C2" },
    title: { fontSize: 30, color: '#fff' },
    image: {width:300, height:300,resizeMode:'contain',overflow:'hidden'},
    button1:{backgroundColor: '#19DDFF', padding: 7, marginTop:10, borderRadius: 10}, 
    buttonText: {color: '#AD4E00', fontSize: 20}
  })
export default Home