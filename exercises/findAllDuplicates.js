function findAllDuplicates(arr) {
    let frequencyCounter1 = {}
    for(let value of arr) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    let result = ''
    for(let value in frequencyCounter1) {
        if(frequencyCounter1[value] === 2) {
            result += value
        }
    }
    if(!result) {
        return []
    }
    return result;
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))
// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1