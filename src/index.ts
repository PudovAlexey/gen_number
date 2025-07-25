import { genTask } from "./utils/genTask";
import { intoView } from "./utils/intoView";
import { randomGen } from "./utils/randomGen";

function generateMatrix() {
  const matrix = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => randomGen(-100, 100)));
  const tasks = genTask(matrix);

  intoView(matrix, tasks);
}

generateMatrix()

// DONE