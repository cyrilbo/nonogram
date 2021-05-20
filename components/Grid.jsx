import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Cell } from "./Cell";

export const Grid = ({nonogram}) => {
  const nbOfCols = nonogram.cols.length;
  const nbOfRows = nonogram.rows.length;
  const cellSize = Math.floor(Dimensions.get("window").width / nbOfCols);

  return (
    <View style={styles.container}>
      {Array(nbOfRows)
        .fill(0)
        .map((_, rowIndex) => (
          <View style={styles.row}>
            {Array(nbOfCols)
              .fill(0)
              .map((_, colIndex) => (
                <Cell key={`${rowIndex}-${colIndex}`} size={cellSize}/>
              ))}
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {flexDirection: "row"}
});
