import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { AppName } from "./components/AppName.jsx";
import { Grid } from "./components/Grid.jsx";
import { NonogramGameProvider } from "./nonogramGame/NonogramGameContext.jsx";
import { smiley } from "./nonograms/smiley.js";
import { CheckGridButton } from "./components/CheckGridButton.jsx";

export default function App() {
  return (
    <NonogramGameProvider nonogram={smiley}>
      <View style={styles.container}>
        <AppName />
        <Grid />
        <CheckGridButton />
      </View>
    </NonogramGameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 8,
  },
});
