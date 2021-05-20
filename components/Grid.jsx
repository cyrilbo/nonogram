import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Cell } from "./Cell";
import { ColumnHints } from "./ColumnHints";
import { RowInts } from "./RowHints";

export const Grid = ({ nonogram }) => {
  const [cellsContainerWidth, setCellsContainerWidth] = useState(0);
  const [cellsContainerHeight, setCellsContainerHeight] = useState(0);
  const nbOfCols = nonogram.cols.length;
  const nbOfRows = nonogram.rows.length;
  const cellSize = Math.floor(cellsContainerWidth / nbOfCols);

  return (
    <View style={styles.container}>
      <View style={{ width: cellsContainerWidth }}>
        <ColumnHints nonogram={nonogram} />
      </View>
      <View style={styles.row}>
        <View style={{ maxHeight: cellsContainerHeight }}>
          <RowInts nonogram={nonogram} />
        </View>
        <View
          style={styles.cellsContainer}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setCellsContainerWidth(width);
            setCellsContainerHeight(height);
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "flex-end" },
  row: { flexDirection: "row" },
  cellsContainer: { flex: 1 },
});
