import React, { Component } from 'react';
import { Image, View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../images/logo.png')} />
            <Text style={{paddingTop:10}}>Smart Locking System</Text>
        </View>
        <View style={styles.formContainer}>
            <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ecc71'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo: {
        height: 100,
        width: 100
    },
    formContainer: {flex: 1}
});