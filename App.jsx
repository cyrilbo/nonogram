import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  Constants from "expo-constants";
import { AppName } from "./components/AppName.jsx";
import { Grid } from './components/Grid.jsx';
import { smiley } from './nonograms/smiley.js';


export default function App() {
  return (
    <View style={styles.container}>
      <AppName />
      <Grid nonogram={smiley}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
