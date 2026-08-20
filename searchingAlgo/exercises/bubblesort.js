function bubbleSort(arr, comparator) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    ;
    if (typeof comparator !== 'function') {
        console.log('fn')
        for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
        
    }
    
    for (let i = arr.length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                if (comparator(arr[j], arr[j + 1]) > 0) {
                    swap(arr, j, j + 1);
                }
            }
        }

        return arr;
}