function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    for( let key in frequencyCounter1) {
        console.log(key)
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(frequencyCounter1, frequencyCounter2)
    return true;
}
same([1,2,3,2], [9,1,4,4])