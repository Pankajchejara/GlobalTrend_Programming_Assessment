// Remove Duplicates from Array
function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}


const valueDuplicatesArray = [2, 2, 6, 3, 4, 4, 5];
console.log("before remove duplicates: ",valueDuplicatesArray)
console.log( "after remove duplicates: ",removeDuplicates(valueDuplicatesArray)); 
