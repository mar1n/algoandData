var result = [];
function deleteArr(...arr) {
  if (!arr.length) {
    return result;
  }
  if (Array.isArray(arr[0])) {
    if (arr.length > 1) {
      return deleteArr(...[...arr[0], ...arr.slice(1)]);
    }

    return deleteArr(...arr[0]);
  }
  result.push(arr[0]);

  return deleteArr(...arr.slice(1));
}

console.log(deleteArr(...[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
