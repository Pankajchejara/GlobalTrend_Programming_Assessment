// Capitalize First Letter of Each Word
function capitalizeWords(str) {
    // Split in words array
    let words = str.split(' ');

    
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });


    return capitalizedWords.join(' ');
}


console.log(capitalizeWords("code")); 
console.log(capitalizeWords("global trend")); 

