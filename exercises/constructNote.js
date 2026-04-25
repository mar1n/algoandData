function constructNote(msg, letters) {
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let value of msg) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let value of letters) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }

    let counter = 0;
    for(let value in frequencyCounter1) {
        if(frequencyCounter1[value] === frequencyCounter2[value]) {
            counter++
        }
    }
    if(counter === Object.keys(frequencyCounter1).length) {
        return true
    }
    return false
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba'))
console.log(constructNote('aabbcc', 'bcabcaddff'))
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true