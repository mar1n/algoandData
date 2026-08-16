function alertes(arr) {
  console.log("arr.slice(1)", arr.slice(1));
  if (arr.length === 0) return 1;
  console.log("alertes", arr);
  console.log("arr", arr.length);
  return arr[0] * alertes(arr.slice(1));
}

alertes([1, 2, 3, 10]);
