import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { CellStatus } from "../nonogramGame/CellStatus";

const renderCellContent = (status, size) => {
  switch (status) {
    case CellStatus.IDDLE:
      return null;
    case CellStatus.SELECTED:
      return <View style={styles.selectedCell} />;
    case CellStatus.DISCARDED:
      return (
        <Image
          style={styles.discardedCell}
          source={require("../assets/cross.png")}
          width={size}
          height={size}
        />
      );
  }
};

export const Cell = ({ size, onPress, status }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { width: size, height: size }]}
    >
      {renderCellContent(status, size)}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  selectedCell: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  discardedCell: {
    resizeMode: "contain",
  },
});
