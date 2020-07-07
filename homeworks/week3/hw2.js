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
  const temp = line[0].split(' ');
  const minNum = Number(temp[0]);
  const maxNum = Number(temp[1]);

  function countDigit(n) {
    let d = 0;
    let num = n;
    while (num > 0) {
      num = Math.floor(num / 10);
      d += 1;
    }
    return d;
  }

  function isValid(num) {
    const digit = countDigit(num);
    let sum = 0;
    let tempNum = num;

    while (tempNum > 0) {
      const a = tempNum % 10;
      sum += a ** digit;
      tempNum = Math.floor(tempNum / 10);
    }

    if (sum === num) {
      return true;
    }
    return false;
  }

  for (let i = minNum; i <= maxNum; i += 1) {
    if (isValid(i)) {
      console.log(i);
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});
