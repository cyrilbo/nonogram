import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Constants from "expo-constants";
import { AppName } from "./components/AppName.jsx";
import { Grid } from './components/Grid.jsx';
import { skiing } from './nonograms/skiing.js';
import { heart } from './nonograms/heart.js';


export default function App() {
  return (
    <View style={styles.container}>
      <AppName />
      <Grid nonogram={heart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 8
  },
});
