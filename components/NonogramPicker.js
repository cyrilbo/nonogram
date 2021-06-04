import React, { useState } from "react";
import { useNonogramGame } from "../nonogramGame/NonogramGameContext";
import RNPickerSelect from "react-native-picker-select";
import { Image, StyleSheet, View } from "react-native";

export const NonogramPicker = () => {
  const { availableNonogramsNames, changeSelectedNonogram, nonogram } =
    useNonogramGame();

  return (
    <RNPickerSelect
      fixAndroidTouchableBug
      useNativeAndroidPickerStyle={false}
      style={{
        inputAndroid: styles.inputPicker,
        inputIOS: styles.inputPicker,
      }}
      placeholder={{}}
      value={nonogram.name}
      onValueChange={(value) => changeSelectedNonogram(value)}
      items={availableNonogramsNames.map((name) => ({
        value: name,
        label: name,
      }))}
      Icon={() => {
        return (
          <View style={styles.bottomArrowContainer}>
            <Image
              source={require("../assets/down-arrow.png")}
              width={20}
              height={20}
              style={styles.bottomArrow}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  bottomArrow: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  inputPicker: {
    height: 50,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#DBDCDE",
    color: "black",
    fontWeight: "bold",
    paddingRight: 40, // to ensure the text is never behind the icon
  },
});
