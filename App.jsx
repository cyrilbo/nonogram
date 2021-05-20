import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Constants from "expo-constants";
import { AppName } from "./components/AppName.jsx";


export default function App() {
  return (
    <View style={styles.container}>
      <AppName />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
