import { readFileSync } from 'fs';

const data = readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

function part1(data: string[]) {
  console.log(data);
  let horizontalPosition = 0;
  let depth = 0;
  data.forEach((line) => {
    const [dir, val] = line.split(' ');
    const num = parseInt(val);
    switch (dir) {
      case 'forward':
        horizontalPosition += num;
        // depth += aim * num;
        break;
      case 'down':
        depth += num;
        // aim += val;
        break;
      case 'up':
        depth -= num;
        // aim -= val;
        break;

      default:
        break;
    }
  });
  console.log(`horizontalPosition: ${horizontalPosition}`);
  console.log(`depth: ${depth}`);
  console.log(horizontalPosition * depth);
}

function part2(data: string[]) {
  console.log(data);
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  data.forEach((line) => {
    const [dir, val] = line.split(' ');
    const num = parseInt(val);
    switch (dir) {
      case 'forward':
        horizontalPosition += num;
        depth += aim * num;
        break;
      case 'down':
        aim += num;
        break;
      case 'up':
        aim -= num;
        break;

      default:
        break;
    }
  });
  console.log(`horizontalPosition: ${horizontalPosition}`);
  console.log(`depth: ${depth}`);
  console.log(`aim: ${aim}`);
  console.log(horizontalPosition * depth);
}

// part1(data);
part2(data);
