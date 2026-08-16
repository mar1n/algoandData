var limit = 0;

function capitalizedWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (limit === arr.length) return arr;
  arr[limit] = arr[limit].toUpperCase();
  limit++;
  return capitalizeWords(arr);
}
capitalizedWords(["i", "am", "learning", "recursion"]);
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
