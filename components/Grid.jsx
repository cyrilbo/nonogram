import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Cell } from "./Cell";
import { ColumnHints } from "./ColumnHints";
import { RowInts } from "./RowHints";
import { useNonogramGame } from "../nonogramGame/NonogramGameContext";

export const Grid = () => {
  const [cellsContainerWidth, setCellsContainerWidth] = useState(0);
  const [cellsContainerHeight, setCellsContainerHeight] = useState(0);
  const { nonogram, toggleCell, getCellStatus } = useNonogramGame();
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
              <View key={rowIndex} style={styles.row}>
                {Array(nbOfCols)
                  .fill(0)
                  .map((_, colIndex) => (
                    <Cell
                      key={`${rowIndex}-${colIndex}`}
                      size={cellSize}
                      onPress={() => {
                        toggleCell(rowIndex, colIndex);
                      }}
                      status={getCellStatus(rowIndex, colIndex)}
                    />
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
