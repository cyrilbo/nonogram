import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const RowInts = ({ nonogram }) => {
  return (
    <View style={styles.container}>
      {nonogram.rows.map((rowHint, index) => (
        <Text key={index}>{rowHint.join(" ")}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: 4,
  },
});
