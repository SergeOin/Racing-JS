// Here a little test
var a = [1, 2];
var b = [3, 4];
function arrayIsEqual(a, b){
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}
console.log(arrayIsEqual(a,b));