import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ColumnHints = ({ nonogram }) => {
  return (
    <View style={styles.container}>
      {nonogram.cols.map((rowHint, colIndex) => (
        <View key={colIndex} style={styles.hintContainer}>
          {rowHint.map((hint, hintIndex) => (
            <Text key={`${colIndex} - ${hintIndex}`} style={styles.hint}>{hint}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  hintContainer: {
    flex: 1,
  },
  hint: {
    textAlign:"center"
  }
});
