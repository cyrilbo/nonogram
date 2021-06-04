import React, { useState, useReducer } from "react";
import { heart } from "../nonograms/heart";
import { helicopter } from "../nonograms/helicopter";
import { mushroom } from "../nonograms/mushroom";
import { oh_ho } from "../nonograms/oh_ho";
import { skiing } from "../nonograms/skiing";
import { smiley } from "../nonograms/smiley";
import { CellStatus } from "./CellStatus";

const availableNonograms = [smiley, helicopter, mushroom, skiing, oh_ho, heart];

const NonogramGameContext = React.createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case "toggle": {
      return {
        ...state,
        cells: state.cells.map((cell) => {
          if (
            cell.colIndex === action.payload.colIndex &&
            cell.rowIndex === action.payload.rowIndex
          ) {
            switch (cell.status) {
              case CellStatus.IDDLE:
                return { ...cell, status: CellStatus.SELECTED };
              case CellStatus.SELECTED:
                return { ...cell, status: CellStatus.DISCARDED };
              case CellStatus.DISCARDED:
                return { ...cell, status: CellStatus.IDDLE };
            }
          } else {
            return cell;
          }
        }),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function NonogramGameProvider({ children }) {
  const [selectedNonogramName, setSelectedNonogramName] = useState(smiley.name);
  const nonogram =
    availableNonograms.find(
      (nonogram) => nonogram.name === selectedNonogramName
    ) || smiley;

  const initialCells = [];
  for (let rowIndex = 0; rowIndex < nonogram.rows.length; rowIndex++) {
    for (let colIndex = 0; colIndex < nonogram.rows.length; colIndex++) {
      initialCells.push({ status: CellStatus.IDDLE, colIndex, rowIndex });
    }
  }

  const [state, dispatch] = useReducer(gameReducer, {
    cells: initialCells,
  });

  const toggleCell = (rowIndex, colIndex) => {
    dispatch({ type: "toggle", payload: { rowIndex, colIndex } });
  };

  const getCellStatus = (rowIndex, colIndex) => {
    return state.cells[rowIndex * nonogram.rows.length + colIndex].status;
  };

  const checkGridValidity = () => {
    return !nonogram.solution.some(
      (cellHasToBeSelected, index) =>
        (cellHasToBeSelected &&
          state.cells[index].status !== CellStatus.SELECTED) ||
        (!cellHasToBeSelected &&
          state.cells[index].status === CellStatus.SELECTED)
    );
  };

  const value = {
    toggleCell,
    getCellStatus,
    checkGridValidity,
    nonogram,
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
