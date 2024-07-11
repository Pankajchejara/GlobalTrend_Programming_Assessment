// Fibonacci Sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] where n=10;
function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(10)); 
