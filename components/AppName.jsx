import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Cell } from "./Cell";

export const AppName = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Nonogram</Text>
    <Cell size={100} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
