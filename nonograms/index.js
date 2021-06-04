import { heart } from "./heart";
import { helicopter } from "./helicopter";
import { mushroom } from "./mushroom";
import { oh_ho } from "./oh_ho";
import { skiing } from "./skiing";
import { smiley } from "./smiley";

export const availableNonograms = [
  smiley,
  helicopter,
  mushroom,
  skiing,
  oh_ho,
  heart,
];

export const availableNonogramsNames = availableNonograms.map(
  (nonogram) => nonogram.name
);
