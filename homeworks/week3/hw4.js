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
  const str = line[0];
  const strLength = str.length;
  for (let i = 0; i < strLength; i += 1) {
    if (str[i] !== str[strLength - i - 1]) {
      console.log('False');
      return;
    }
  }
  console.log('True');
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
