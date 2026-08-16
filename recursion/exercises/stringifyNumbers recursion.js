var newObj = {};
var keysArr = [];
var superPath = [];
let result = {};

function stringifyNumbers(obj, keys) {
  if (keys.length) {
    keysArr = keys;
  } else {
    keysArr = Object.keys(obj);
  }

  if (Object.prototype.toString.call(obj[keysArr[0]]) === "[object Object]") {
    superPath.push(keysArr[0]);
    return stringifyNumbers(obj[keysArr[0]], []);
  }

  if (typeof obj[keysArr[0]] === "number") {
    if (superPath.length) {
      superPath.push(keysArr[0]);
      result = updateobj(result, superPath, `${obj[keysArr[0]]}`);
      if (keysArr.length > 1) {
        superPath.pop();
      }
    } else {
      newObj = {};
      newObj[keysArr[0]] = `${obj[keysArr[0]]}`;

      result = {
        ...obj,
        ...newObj,
      };
    }
  }

  if (!pathArr.slice(1).length) {
    return result;
  }

  return stringifyNumbers(obj, keysArr.slice(1));
}

function updateobj(obj, path, value) {
  if (path.length === 0) {
    return value;
  }
  let [key, ...rest] = path;

  return {
    ...obj,
    [key]: updateobj(obj[key], rest, value),
  };
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj, [], []));

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
