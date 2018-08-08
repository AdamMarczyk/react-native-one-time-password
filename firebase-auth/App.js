import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    var config = {
      apiKey: 'AIzaSyA4OsqAU3_lytlmETVeHO_mo2lHtn9nIxI',
      authDomain: 'one-time-password-1e4a7.firebaseapp.com',
      databaseURL: 'https://one-time-password-1e4a7.firebaseio.com',
      projectId: 'one-time-password-1e4a7',
      storageBucket: 'one-time-password-1e4a7.appspot.com',
      messagingSenderId: '1013916630024'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
