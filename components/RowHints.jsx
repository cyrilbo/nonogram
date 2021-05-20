import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const RowInts = ({ nonogram }) => {
  return (
    <View style={styles.container}>
      {nonogram.rows.map((rowHint, index) => (
        <View style={styles.hintContainer}>
        <Text key={index}>{rowHint.join(" ")}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    padding: 4,
  },
  hintContainer: {
    flex: 1,
    justifyContent: "center",
  }
});
