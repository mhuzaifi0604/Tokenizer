import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Tokens = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Tokens Status</Text>
    <Link style={styles.homebutton} href={'/(Customers)/Organizations'}>
        Org Selection
    </Link>
  </View>
  )
}

export default Tokens

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
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
  });