var counter = 0;

function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    console.log('arr', arr)
    if (counter === arr.length) {
        counter = 0;
        return arr;
    }
    arr[counter] = arr[counter].charAt(0).toUpperCase() + arr[counter].slice(1)
    counter++
    return capitalizeFirst(arr)
}

capitalizeFirst(['car', 'taco', 'banana'])
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
