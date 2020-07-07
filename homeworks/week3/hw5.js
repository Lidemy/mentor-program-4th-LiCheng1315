/* global BigInt */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

function solve(line) {
  const len = line[0];

  for (let i = 1; i <= len; i += 1) {
    const arr = line[i].split(' ');
    const playerA = BigInt(arr[0]);
    const playerB = BigInt(arr[1]);

    if (playerA === playerB) {
      console.log('DRAW');
    } else {
      if (arr[2] === '1') {
        if (playerA > playerB) {
          console.log('A');
        } else {
          console.log('B');
        }
      }

      if (arr[2] === '-1') {
        if (playerA > playerB) {
          console.log('B');
        } else {
          console.log('A');
        }
      }
    }
  }
}
// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
