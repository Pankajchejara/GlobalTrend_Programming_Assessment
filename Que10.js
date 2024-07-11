// Convert String to Title Case
function toTitleCase(string) {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(toTitleCase("hello world")); // "Hello World"
