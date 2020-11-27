// your code is here
function range(start, stop, step = 1){
    return Array.from({ length: ((stop - start) / step) + 1 }, (_, i) => start + (i * step))
}

// few tests
console.log(range(1, 10, 2));
console.log(range(19, 22));
console.log(range(5, 2, -1));
