import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput 
          placeholder="Username or E-mail" 
          placeholderTextColor="rgba(255, 255, 255, 0.7)" 
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input} 
        />
        <TextInput 
          placeholder="Password" 
          secureTextEntry
          placeholderTextColor="rgba(255, 255, 255, 0.7)" 
          ref={(input) => this.passwordInput = input}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  buttonContainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});