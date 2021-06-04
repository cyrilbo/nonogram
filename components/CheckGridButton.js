import React from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNonogramGame } from "../nonogramGame/NonogramGameContext";

export const CheckGridButton = () => {
  const { checkGridValidity } = useNonogramGame();
  const onButtonPress = () => {
    const isGridValid = checkGridValidity();
    Alert.alert(
      "Résultat",
      isGridValid ? "La grille est valide ✅" : "La grille n'est pas valide ❌",
      [
        {
          text: "Fermer",
          style: "cancel",
        },
      ]
    );
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress}>
      <Text style={styles.title} >Vérifier la grille</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#DBDCDE",
    width: "100%",
    borderRadius: 4,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  }
})
