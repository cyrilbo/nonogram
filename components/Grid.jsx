import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Cell } from "./Cell";
import { RowInts } from "./RowHints";

export const Grid = ({ nonogram }) => {
  const [cellsContainerWidth, setCellsContainerWidth] = useState(0);
  const nbOfCols = nonogram.cols.length;
  const nbOfRows = nonogram.rows.length;
  const cellSize = Math.floor(cellsContainerWidth / nbOfCols);

  return (
    <View style={styles.container}>
      <RowInts nonogram={nonogram} />
      <View
        style={styles.cellsContainer}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setCellsContainerWidth(width);
        }}
      >
        {Array(nbOfRows)
          .fill(0)
          .map((_, rowIndex) => (
            <View style={styles.row}>
              {Array(nbOfCols)
                .fill(0)
                .map((_, colIndex) => (
                  <Cell key={`${rowIndex}-${colIndex}`} size={cellSize} />
                ))}
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  cellsContainer: {flex: 1},
  row: { flexDirection: "row" },
});
