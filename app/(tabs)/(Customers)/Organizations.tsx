import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const OrganizationSelection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organization Selection.</Text>
      <Link style={styles.homebutton} href="/(Customers)/Tokens">
      Tokens
      </Link>
      <Link style={styles.homebutton} href="/(Auth)/">
      Logout
      </Link>
    </View>
  )
}

export default OrganizationSelection

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
    color: 'white'
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