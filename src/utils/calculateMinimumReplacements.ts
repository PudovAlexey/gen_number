export function calculateMinReplacements(matrix: number[][]) {
  const replacements = [];

  for (const row of matrix) {
    let countPos = 0;
    let countNeg = 0;
    let changes = 0;

    for (const num of row) {
      if (num > 0) {
        countPos++;
        countNeg = 0;
      } else if (num < 0) {
        countNeg++;
        countPos = 0;
      } else {
        countPos = 0;
        countNeg = 0;
      }

      if (countPos === 3 || countNeg === 3) {
        changes++;
        countPos = 0;
        countNeg = 0;
      }
    }

    replacements.push(changes);
  }

  return replacements;
}