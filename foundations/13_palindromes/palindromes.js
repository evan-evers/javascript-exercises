const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const filteredString = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join();

    const halfLength = Math.floor(filteredString.length / 2);
    for(let i = 0; i < halfLength; ++i)
    {
        if(filteredString[i] !== filteredString[filteredString.length - 1 - i])
        {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
