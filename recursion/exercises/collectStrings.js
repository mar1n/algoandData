var result = [];
var keysArr = [];
var superPath = [];

function collectStrings(obj, keys) {
  if (keys.length) {
    keysArr = keys;
  } else {
    keysArr = Object.keys(obj);
  }
  if (Object.prototype.toString.call(obj[keysArr[0]]) === "[object Object]") {
    superPath.push(keysArr[0]);
    return collectStrings(obj[keysArr[0]], []);
  }

  if (typeof obj[keysArr[0]] === "string") {
    result.push(obj[keysArr[0]]);
  }

  if (!keysArr.slice(1).length) {
    return result;
  }
  return collectStrings(obj, keysArr.slice(1));
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj, keys);
// ["foo", "bar", "baz"])
