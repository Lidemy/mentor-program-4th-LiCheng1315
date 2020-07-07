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
  const arr = [];
  for (let i = 1; i <= len; i += 1) {
    arr.push(Number(line[i]));
  }

  function isPrime(num) {
    if (num === 1) {
      return false;
    }

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < len; i += 1) {
    if (isPrime(arr[i])) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
