import { calculateMinReplacements } from './calculateMinimumReplacements';

export type GenTaskOutput = {
    minimumNumberIndex: number,
    minimumPositiveRowNumber: (number | null)[],
    minReplacements: number[]
}

export function genTask(matrix: number[][]): GenTaskOutput {
    let minimumNumber = 0;

    let minimumNumberIndex = 0;
    let minimumPositiveRowNumber: (null | number)[] = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const min = Math.min(...row);
        let minimummPositioveNumber: null | number = null;

        for (let j = 0; j < row.length; j++) {
            let num = row[j];
            if (num > 0 && (minimummPositioveNumber === null || minimummPositioveNumber > num)) {
                minimummPositioveNumber = num;
            }
        }

        if (minimumNumber > min) {
            minimumNumber = min;
            minimumNumberIndex = i;
        }

        minimumPositiveRowNumber.push(minimummPositioveNumber);
    }

    const minReplacements = calculateMinReplacements(matrix);

    return {
        minimumNumberIndex,
        minimumPositiveRowNumber,
        minReplacements

    }
}