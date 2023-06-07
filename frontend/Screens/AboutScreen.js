import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, color: 'orange'}}>About Screen Not Yet available, it will be soon!</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})