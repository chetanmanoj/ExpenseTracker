import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from '@react-navigation/native';



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behavior = "padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            value = {email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            value = {password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() =>{handleSignIn}}
        style = {styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>


      {/* <TouchableOpacity
        onPress={() => {handleSignUp}}
        style = {[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Register</Text>
      </TouchableOpacity> */}
      </View>
      <Text>Don't have an account? <Link to={{ screen: 'Register', params: { id: 'Register' } }} style={styles.link}>
      Sign Up
    </Link> </Text>
      </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DDADE'
    },
    inputContainer:{
        width:'80%',
        // backgroundColor:'#B4DBDD'
    },
input:{
    backgroundColor:'gray',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius:10,
    marginTop:15,
    backgroundColor:'white'
    
},
buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
},
button:{
    backgroundColor:'white',
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center',
    marginBottom:20,
    marginTop:30,
},
buttonText:{
    color:'black',
    fontWeight:'70',
    fontSize:16,
},
buttonOutline:{
    backgroundColor:'black',
    marginTop:5,
    borderColor:'blue',
    borderWidth:2,
},
buttonOutlineText:{

},
link:{
    color:'blue'
}
})