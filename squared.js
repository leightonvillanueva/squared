const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function squared(array) {
  const perf = [];
  const other = [];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (Math.sqrt(num) % 1) {
      perf.push(num);
    } else {
      other.push(num);
    }
  }
  return [perf, other];
}

console.log(squared(test));

function squaredActually(array) {
  const perf = [];
  const other = [];
  _.filter(array, function (num) {
    if (Math.sqrt(num) % 1 === 0) {
      perf.push(num);
    } else {
      other.push(num);
    }
  });
  return [perf, other];
}

console.log(squaredActually(test));

function vincentSquared(array) {
  return _.partition(array, function (num) {
    const squaredNum = Math.sqrt(num);
    if (squaredNum % 1 === 0) {
      return true;
    }
    return false;
  });
}

console.log(vincentSquared(test));
