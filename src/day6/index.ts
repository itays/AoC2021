const input = `4,1,1,4,1,1,1,1,1,1,1,1,3,4,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,5,1,2,1,1,5,3,4,2,1,1,4,1,1,5,1,1,5,5,1,1,5,2,1,4,1,2,1,4,5,4,1,1,1,1,3,1,1,1,4,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,2,1,1,1,1,1,1,1,2,4,4,1,1,3,1,3,2,4,3,1,1,1,1,1,2,1,1,1,1,2,5,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,4,1,5,1,3,1,1,1,1,1,5,1,1,1,3,1,2,1,2,1,3,4,5,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,3,1,1,3,1,1,4,1,1,1,1,1,2,1,1,1,1,3,2,1,1,1,4,2,1,1,1,4,1,1,2,3,1,4,1,5,1,1,1,2,1,5,3,3,3,1,5,3,1,1,1,1,1,1,1,1,4,5,3,1,1,5,1,1,1,4,1,1,5,1,2,3,4,2,1,5,2,1,2,5,1,1,1,1,4,1,2,1,1,1,2,5,1,1,5,1,1,1,3,2,4,1,3,1,1,2,1,5,1,3,4,4,2,2,1,1,1,1,5,1,5,2`;

function toMap(intArr: number[]) {
  const map = new Map<number, number>();
  for (const key of intArr) {
    incrementMap(map, key, 1);
  }
  return map;
}

function incrementMap(map: Map<number, number>, key: number, increment: number) {
  if (!map.has(key)) {
    map.set(key, 0);
  }
  map.set(key, map.get(key) + increment);
}
function calc(days: number) {
  let map = toMap(input.split(',').map(Number));

  for (let i = 0; i < days; i++) {
    const newMap = new Map<number, number>();
    for (const [timer, count] of map) {
      if (timer > 0) {
        incrementMap(newMap, timer - 1, count);
      } else if (timer === 0) {
        incrementMap(newMap, 6, count);
        incrementMap(newMap, 8, count);
      }
    }
    map = newMap;
  }
  let fishCount = 0;
  for (const [, count] of map) {
    fishCount += count;
  }
  console.log(fishCount);
}

// part 1
// calc(80);

// part2
calc(256);
