function isSubSequence(str1, str2) {
  let run = 0;
  let times = str1.length;
  let pointer = 0;

  let result = "";
  while (run < str2.length) {
    if (str1[pointer] === str2[run]) {
      if (result.length === str1.length) {
        result =
          result.slice(0, pointer) +
          `${str1[pointer]}` +
          result.slice(result.length, result.length);
      } else {
        result =
          result.slice(0, run) +
          `${str1[pointer]}` +
          result.slice(run, str1.length);
      }
    }
    if (times === 0) {
      break;
    }
    if (run === str2.length - 1) {
      run = 0;
      pointer++;
      times--;
    } else {
      run++;
    }
  }
  return result === str1
}

console.log(isSubSequence('abc', 'acb'));

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// 1234
// sing

// 12345
// sting

// if(s[0] i[2] n[3] g[5])

// 123
// abc
// 123
// acb
// if(a[1] b[2] c[3])
// if(a[1] c[2] b[3])
