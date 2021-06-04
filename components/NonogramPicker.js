import React from "react";
import { useNonogramGame } from "../nonogramGame/NonogramGameContext";
import RNPickerSelect from "react-native-picker-select";

export const NonogramPicker = () => {
  const { availableNonogramsNames, changeSelectedNonogram, nonogram } =
    useNonogramGame();
  return (
    <RNPickerSelect
      placeholder={{}}
      value={nonogram.name}
      onValueChange={(value) => changeSelectedNonogram(value)}
      items={availableNonogramsNames.map((name) => ({
        value: name,
        label: name,
      }))}
    />
  );
};
