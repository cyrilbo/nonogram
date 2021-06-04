import { useReducer } from "react";
import { availableNonograms, availableNonogramsNames } from "../nonograms";
import { CellStatus } from "./CellStatus";

const generateInitialCells = (nonogram) => {
  const initialCells = [];
  for (let rowIndex = 0; rowIndex < nonogram.rows.length; rowIndex++) {
    for (let colIndex = 0; colIndex < nonogram.cols.length; colIndex++) {
      initialCells.push({ status: CellStatus.IDDLE, colIndex, rowIndex });
    }
  }
  return initialCells;
};

const initialState = {
  cells: generateInitialCells(availableNonograms[0]),
  nonogram: availableNonograms[0],
};

const nonogramGameReducer = (state, action) => {
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
    case "change_nonogram": {
      const newNonogram = availableNonograms.find(
        (nonogram) => nonogram.name === action.payload.newNonogramName
      );
      if (!newNonogram) {
        throw new Error(
          `Nonogram ${
            action.payload.newNonogramName
          } does not exist. Here is the list of all available nonograms:\n- ${availableNonogramsNames.join(
            "\n- "
          )}`
        );
      }
      return {
        ...state,
        nonogram: newNonogram,
        cells: generateInitialCells(newNonogram),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useNonogramReducer = () => {
  const [state, dispatch] = useReducer(nonogramGameReducer, initialState);

  const { nonogram, cells } = state;

  const toggleCell = (rowIndex, colIndex) => {
    dispatch({ type: "toggle", payload: { rowIndex, colIndex } });
  };

  const changeSelectedNonogram = (newNonogramName) => {
    dispatch({ type: "change_nonogram", payload: { newNonogramName } });
  };

  return { nonogram, cells, toggleCell, changeSelectedNonogram };
};
