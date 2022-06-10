import { StyleSheet, Text, View, Modal, Image, Alert} from 'react-native'
import React from 'react'
import color from '../misc/color'
import {Query, useQuery, GraphQLRequest,gql, useMutation} from '@apollo/client'
import logo2 from './../../assets/sounds_logo_wait.png'

const values = {
  user: '',
  password: '',
};



const WaitModal = ({visible, setVisible,user, password,tipo, navigation}) => {
  
  return (
    
    <Modal transparent animationType="slide"  visible={visible} onRequestClose={() => {
        setVisible(false);
      }} >
        
       <View style={styles.container}>
        <View style={styles.modalView} >
        <Image transparent={true} source={logo2} style={styles.image}/>
        <Text style={styles.text}>Cargando ...</Text>
        {sendData(user,password, tipo,visible, setVisible, navigation)}
      </View>
      </View>
      
      </Modal>
  ) 
}

const sendData = (user,password,tipo,visible, setVisible,navigation)=>{    //Send values of authentication
  if(tipo== 'in' && visible){
    const data = useMutation( gql`
    mutation {
      loginUser(usuario: {
        email: "${user}", 
        password: "${password}" 
      }) {
        Token
      }
    }`)
    if (data.loading  ) {
      console.log("cargando")
      //return <Text>Cargando ..... </Text>
    }
    if (data.error){
      console.log(data.error)
      //return <Text>Ocurrió un error </Text>
    }
    if (data.data){
      return (
        setVisible(false),
        navigation.navigate('Play')
      )
    }else {
      return(
        
        /*Alert.alert(
          "Datos incorrectos",
          "Si no tienes cuenta registrate en la opción singup"
        )*/navigation.navigate('Play'),
        setVisible(false)
      )
    }
    
  }else if(tipo == 'up' && visible){
  console.log("en up")
  setVisible(false)
} 
setVisible(false)
}

 export default WaitModal

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  modalView: {
    marginVertical: '50%',
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {width:300, height:300,resizeMode:'contain',overflow:'hidden'},
  text:{
      color: '#fff'
  }
})