import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CellStatus = {
  IDDLE: "IDDLE",
  SELECTED: "SELECTED",
  DISCARDED: "DISCARDED",
};

const renderCellContent = (status) => {
  switch (status) {
    case CellStatus.IDDLE:
      return null;
    case CellStatus.SELECTED:
      return <View style={styles.selectedCell} />;
    default:
      return <Text>{status}</Text>;
  }
};

export const Cell = ({ size }) => {
  const [status, setStatus] = useState(CellStatus.IDDLE);
  const onCellPress = () => {
    switch (status) {
      case CellStatus.IDDLE:
        setStatus(CellStatus.SELECTED);
        break;
      case CellStatus.SELECTED:
        setStatus(CellStatus.DISCARDED);
        break;
      case CellStatus.DISCARDED:
        setStatus(CellStatus.IDDLE);
        break;
    }
  };
  return (
    <Pressable
      onPress={onCellPress}
      style={[styles.container, { width: size, height: size }]}
    >
      {renderCellContent(status)}
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
});
