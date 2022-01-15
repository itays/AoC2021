import { readFileSync } from 'fs';

const data = readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

function part1(data: string[]) {
  const byBit: Record<number, string[]> = {};
  const gamaArr = [];
  const epsilonArr = [];

  // arranging each bit position in each line in an array
  data.forEach((line) => {
    line.split('').forEach((char, index) => {
      if (!byBit[index]) {
        byBit[index] = [char];
        return;
      }
      byBit[index].push(char);
    });
  });

  Object.values(byBit).forEach((arr, index) => {
    const [ones, zeros] = countOccurences(arr);
    if (ones > zeros) {
      gamaArr.push(1);
      epsilonArr.push(0);
    } else {
      gamaArr.push(0);
      epsilonArr.push(1);
    }
  });

  const gama = toDecimal(gamaArr.join(''));
  const epsilon = toDecimal(epsilonArr.join(''));
  const powerConsumption = gama * epsilon;
  console.log(powerConsumption);
}

function countOccurences(arr: string[]) {
  let ones = 0;
  let zeros = 0;
  arr.forEach((bit) => {
    if (bit === '1') {
      ones++;
    } else {
      zeros++;
    }
  });
  return [ones, zeros];
}

function toDecimal(binary: string) {
  return parseInt(binary, 2);
}

part1(data);
