// Your implementation
function arrayFilter(array, test){
    array = array[value];
    test = array.filter(toFilter);
}

// Use this to test
let toFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// the anonymous function is the test your filtering function will use to
make decision;

let passed = arrayFilter(toFilter, function (value) {
    return value % 3 === 0;
});
console.log(passed);
