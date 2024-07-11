
// Check Anagrams

function areAnagrams(str1, str2) {
    const sortString = str => str.toLowerCase().split('').sort().join('');
    return sortString(str1) === sortString(str2);

}console.log( " triangle and integral are Anagrams: ",areAnagrams("triangle", "integral")); // true
console.log( " apple and pale are Anagrams: ",areAnagrams("apple", "pale")); // false
