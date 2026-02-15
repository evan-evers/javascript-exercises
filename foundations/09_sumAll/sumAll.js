const sumAll = function(a, b) {
    if(a < 0 || b < 0)
    {
        return "ERROR";
    }

    if(!Number.isInteger(a) || !Number.isInteger(b))
    {
        return "ERROR";
    }

    let low = a < b ? a : b;
    let high = a > b ? a : b;

    sum = 0;
    for(let i = low; i <= high; ++i)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
