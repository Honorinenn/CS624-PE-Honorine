import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignSelf: 'flex-end',
    marginTop: 10
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  }
})

export default Button