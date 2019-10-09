import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Login from './src/components/Login/Login'
import { StackNavigator } from 'react-navigation';

export default class SmartLockingSystem extends Component {
  render() {
    return (
      <>
        <Login />
      </>
    );
  }
}
