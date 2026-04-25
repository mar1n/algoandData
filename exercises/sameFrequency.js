function sameFrequenct(firstNum,  secondNum) {
    if(firstNum.toString().length !== secondNum.toString().length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let value of firstNum.toString()) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let value of secondNum.toString()) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }

    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;
}

console.log(sameFrequenct(3589578, 5879385));

// sameFrequenct(182, 281) //true
// sameFrequenct(34, 14) //false
// sameFrequenct(3589578, 5879385) //true
// sameFrequenct(22, 222) // false