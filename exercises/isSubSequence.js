function isSubSequence(str1, str2) {
    let strLong = str1 + ' ' + str2
    let run = 0
    let times = str1.length
    let pointer = 0
    
    var strCheck = ''
    while(run < str2.length) {
        
        console.log('run', run)
        if(str1[pointer] === str2[run]) {
            console.log(str1[pointer],'pointer find letter at', run)
            strCheck += `${run}`
        }
        if(times === 0) {
            console.log('fft', strCheck)
            break
        }
        // if(str1.length === str2.length && run + 1 === str1.length) {
        //     console.log('loop')
        // }
        if(run === str1.length || str1.length === str2.length && run + 1 === str1.length) {
            console.log('aa')
            run = 0
            pointer++
            times--
        } else {
            run++
            console.log('run', 'add')
        }
    }
    console.log('strCheck', strCheck)
    // for(let value = 0; value < strCheck.length; value++) {
    //     console.log(strCheck[value])
    //     if(strCheck[value] > strCheck[value + 1]) {
    //         return false
    //     }
    // }
    // return true
    //if(str1 === strCheck) return true
}

console.log(isSubSequence('sing', 'sting'))

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