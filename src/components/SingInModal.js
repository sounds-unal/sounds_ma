import { StyleSheet, Text, View, Modal, StatusBar, TextInput, Button } from 'react-native'
import React from 'react'
import color from '../misc/color'
import {Query, useQuery, GraphQLRequest,gql, useMutation} from '@apollo/client'
import { client } from './../graphql/Client';

export const values = {
  user: '',
  password: '',
};



const SingInModal = ({visible, setVisible, setVisibleWait}) => {
  
  const [user, userin] = React.useState()
  const [password, passin] = React.useState()
  return (
    
    <Modal transparent animationType="slide"  visible={visible} onRequestClose={() => {
      setVisible(false);
    }}>
      
     <View style={styles.container}>
      <View style={styles.modalView} >
    <TextInput style={styles.input}
      placeholder="Escriba usuario"
      onChangeText={text => userin(text)}
      value={user}
      errorMessage={'usuario incorrecto'}
    />
    <TextInput style={styles.input}
      placeholder="Escriba contraseña"
      onChangeText={text => passin(text)}
      value={password}
      secureTextEntry={true}
      errorMessage={'password incorrecta'}
    /> 
    <Button 
      title="Sign in"
      onPress={() => {values.user=user,values.password=password,setVisibleWait(true),setVisible(false) }} 
      isDisabled={'lol'}
      isLoading={'loading ....'}
    />
    </View>
    </View>
    </Modal>
  ) 
}

const sendData = (client)=>{    //Send values of authentication
  console.log(values.user, '  ', values.password)
  try{
  const data = useMutation( gql`
  mutation {
    loginUser(usuario: {
      Email: "${values.user}", 
      Password: "${values.password}" 
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
  return (
    console.log("si pasó ")
  )}catch(e){
    console.log(e)
  }

  
}

 export default SingInModal

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
    backgroundColor: 'white',
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
})