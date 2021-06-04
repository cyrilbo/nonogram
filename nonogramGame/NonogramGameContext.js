import React from "react";
import { availableNonogramsNames } from "../nonograms";

import { CellStatus } from "./CellStatus";
import { useNonogramReducer } from "./NonogramGameReducer";

const NonogramGameContext = React.createContext();

function NonogramGameProvider({ children }) {
  const { cells, nonogram, toggleCell, changeSelectedNonogram } =
    useNonogramReducer();

  const getCellStatus = (rowIndex, colIndex) => {
    return cells[rowIndex * nonogram.rows.length + colIndex].status;
  };

  const checkGridValidity = () => {
    return !nonogram.solution.some(
      (cellHasToBeSelected, index) =>
        (cellHasToBeSelected && cells[index].status !== CellStatus.SELECTED) ||
        (!cellHasToBeSelected && cells[index].status === CellStatus.SELECTED)
    );
  };

  const value = {
    toggleCell,
    getCellStatus,
    checkGridValidity,
    nonogram,
    changeSelectedNonogram,
    availableNonogramsNames,
  };
  return (
    <NonogramGameContext.Provider value={value}>
      {children}
    </NonogramGameContext.Provider>
  );
}
function useNonogramGame() {
  const context = React.useContext(NonogramGameContext);
  if (context === undefined) {
    throw new Error(
      "useNonogramGame must be used within a NonogramGameProvider"
    );
  }
  return context;
}

export { NonogramGameProvider, useNonogramGame };
