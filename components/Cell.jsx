import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CellStatus = {
  IDDLE: "IDDLE",
  SELECTED: "SELECTED",
  DISCARDED: "DISCARDED",
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
      <Text>{status}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
