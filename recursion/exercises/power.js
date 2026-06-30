var value = 3
function test(x) {
    // var value = x
    // function inner() {
    //     value--
    // }
    // inner()
    // if(value === 0) {
    //     return;
    // }
    if(value === 1) return x
    console.log(x)
    value--
    return x * test(x)
}
test(4)