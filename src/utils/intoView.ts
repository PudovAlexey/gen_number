import { GenTaskOutput } from "./genTask";

  const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',

    // Цвета текста
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',

    // Цвета фона
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m'
  };


export function intoView(matrix: number[][], tasks: GenTaskOutput) {

  console.log('\n' + colors.bgBlue + colors.bright + colors.white +
    ' МАТРИЦА С РЕЗУЛЬТАТАМИ '.padEnd(80, ' ') +
    colors.reset);

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const isMinRow = tasks.minimumNumberIndex === i;
    const minPositive = tasks.minimumPositiveRowNumber[i];
    const replacements = tasks.minReplacements[i];

    // Форматируем строку матрицы
    let rowStr = row.map(num => {
      if (num === minPositive) return colors.green + num + colors.reset;
      if (num === Math.min(...row)) return colors.red + num + colors.reset;
      return num;
    }).join(', ');

    // Собираем строку вывода
    let output = [
      isMinRow ? colors.yellow + '*' + colors.reset : ' ',
      colors.bright + `Строка ${i}:` + colors.reset,
      rowStr,
      minPositive !== null ?
        colors.cyan + `Наим. положительное: ${minPositive}` + colors.reset :
        colors.dim + 'Все числа отрицательные' + colors.reset,
      colors.magenta + `Замен требуется: ${replacements}` + colors.reset
    ].join(' | ');

    console.log(output);
  }

  console.log('\n' + colors.dim + 'Пояснения:' + colors.reset);
  console.log(colors.yellow + '* ' + colors.reset + '- строка содержит минимальное число в матрице');
  console.log(colors.green + 'зеленый ' + colors.reset + '- наименьшее положительное число в строке');
  console.log(colors.red + 'красный ' + colors.reset + '- минимальное число в строке');
  console.log(colors.magenta + 'розовый ' + colors.reset + '- количество необходимых замен');
}