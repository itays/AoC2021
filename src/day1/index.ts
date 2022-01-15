import { readFileSync } from 'fs';

const data = readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

function part1(data: string[]) {
  let increases = 0;
  for (let index = 1; index < data.length; index++) {
    const input = +data[index];
    const prev = +data[index - 1];
    if (input > prev) {
      increases++;
    }
  }
  return increases;
}

// console.log(part1(data));

function part2(data: string[]) {
  const lines = data.map((val) => parseInt(val));
  console.log(lines);
  let currentSum = 0;
  let nextSum = 0;
  let increases = 0;
  for (let i = 0; i < 3; i++) {
    currentSum += lines[i];
  }

  for (let i = 3; i < lines.length; i++) {
    const left = lines[i - 3];
    const right = lines[i];
    nextSum = currentSum - left + right;
    if (nextSum > currentSum) {
      increases++;
    }
    currentSum = nextSum;
  }
  return increases;
}

console.log(part2(data));
