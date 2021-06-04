import React from "react";
import { Alert, Button } from "react-native";
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
  return <Button title="Vérifier la grille" onPress={onButtonPress} />;
};
