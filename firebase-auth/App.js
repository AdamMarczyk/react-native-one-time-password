import React from 'react';
import { StyleSheet } from 'react-native';
import SignUpForm from './components/SignUpForm';

export default class App extends React.Component {
  render() {
    return <SignUpForm />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
