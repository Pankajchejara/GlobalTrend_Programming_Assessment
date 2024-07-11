// Flatten Nested Array

// we can flat a array by these two methods

// 1.

function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4, 5]]]])); 


// 2.

function flattenArray(arr) {
    let result = [];
    
    function flatten(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flatten(item);
            }
        } else {
            result.push(element);
        }
    }
    
    flatten(arr);
    return result;
}

// Test the function
const nestedArray = [1, [2, [3, [4, 5]]]];
console.log("flatternArray: ",flattenArray(nestedArray));
