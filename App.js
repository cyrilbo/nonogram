import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { AppName } from "./components/AppName.js";
import { Grid } from "./components/Grid.js";
import { NonogramGameProvider } from "./nonogramGame/NonogramGameContext.js";
import { smiley } from "./nonograms/smiley.js";
import { CheckGridButton } from "./components/CheckGridButton.js";
import { NonogramPicker } from "./components/NonogramPicker.js";
import { Spacer } from "./components/Spacer.js";

export default function App() {
  return (
    <NonogramGameProvider nonogram={smiley}>
      <View style={styles.container}>
        <AppName />
        <NonogramPicker />
        <Spacer height={20} />
        <Grid />
        <Spacer height={20} />
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
