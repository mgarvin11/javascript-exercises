const palindromes = function () {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedString = cleanedString.split('').reversed().join('');

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
