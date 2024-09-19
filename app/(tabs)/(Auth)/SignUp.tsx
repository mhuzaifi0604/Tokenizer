import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const SignUp = () => {
  return (
    <View style = {styles.container}>
      <Text style ={{color: 'white'}}>SignUp Page</Text>
      <Link style={styles.homebutton} href={'/LogIn'}>
      Sign In
      </Link>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap:12
    },
    homebutton:{
      display: 'flex',
      flexWrap: 'wrap',
      width: 'auto',
      padding: 5,
      fontWeight: 'bold',
      borderColor: 'white',
      borderWidth: 1,
      color: 'white',
      borderRadius: 5
    }
})