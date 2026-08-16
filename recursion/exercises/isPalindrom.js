var newStr = "";
function isPalindrom(str, str2 = "") {
  // add whatever parameters you deem necessary - good luck!
  let leng = str.length;
  newStr += str2;
  const finallStr = newStr;
  if (leng === 0) {
    newStr = "";
    return finallStr;
  }
  return reverse(str.slice(0, leng - 1), str.slice(leng - 1));
}
