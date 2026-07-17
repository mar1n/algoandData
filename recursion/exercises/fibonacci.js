function fibonacci(f) {
     if(f === 0) {
        return 0
    }
    if(f === 1) {
        return 1 + someF(f -1)
    }
    if(f === 2) {
        return someF(0) + someF(1)
    }
    return someF(f -1) + someF(f -2)
}

console.log(fibonacci(5))