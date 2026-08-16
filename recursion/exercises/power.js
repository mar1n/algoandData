function close(num, power) {
  var accumulator = power;

  function open() {
    accumulator--;
    console.log(accumulator);
    return accumulator;
  }

  open();
  if (accumulator === 0) return num;
  return num * close(num, accumulator);
}

console.log(close(2, 3));
