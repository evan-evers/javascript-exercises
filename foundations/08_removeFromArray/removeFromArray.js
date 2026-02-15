const removeFromArray = function(arr, ...args) {
    for(arg of args)
    {
        arr = arr.filter((element) => element !== arg);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
