var accumulator = 0;
var someArr;

function nestedEvenSum(obj, arr) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length) {
    someArr = arr;
  } else {
    someArr = Object.values(obj);
  }
  //console.log('obj', obj)

  if (Object.prototype.toString.call(someArr[0]) === "[object Object]") {
    return nestedEvenSum(obj, [
      ...Object.values(someArr[0]),
      ...someArr.slice(1),
    ]);
  }
  if (typeof someArr[0] === "number" && someArr[0] % 2 === 0) {
    accumulator += someArr[0];
  }
  if (!someArr.slice(1).length) return accumulator;
  return nestedEvenSum(obj, someArr.slice(1));
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2,
      },
    },
  },
  c: {
    c: {
      c: 2,
    },
    cc: "ball",
    ccc: 5,
  },
  d: 1,
  e: {
    e: {
      e: 2,
    },
    ee: "car",
  },
};
//console.log(Object.values(obj2))
//nestedEvenSum(obj1, []);
// 6
nestedEvenSum(obj1, []); // 10
