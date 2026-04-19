function validAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let value of first) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let value of second) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true
}

validAnagram("aaz", "zza")
validAnagram("rat", "car")
validAnagram("szymon", "nomyzs")



// validAnagram("", "") //true
// validAnagram("aaz", "zza") //false
// validAnagram("anagram", "nagaram") // true
// validAnagram("rat", "car") //false
// validAnagram("awesome", "awesom") // false
// validAnagram("qwerty", "qeywrt") // true
// validAnagram("texttwisttime", "timetwisttext") // true