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
  const n = line[0];

  function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i += 1) {
      result += str;
    }
    console.log(result);
  }
  for (let i = 1; i <= n; i += 1) {
    repeat('*', i);
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
