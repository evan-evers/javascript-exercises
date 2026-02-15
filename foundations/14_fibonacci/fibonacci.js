const fibonacci = function(number) {
    if(number < 0)
    {
        return "OOPS";
    }

    if(number == 0)
    {
        return 0;
    }

    if(number <= 2)
    {
        return 1;
    }

    let current = 1, prev1 = 1, prev2 = 1;
    for(let i = 2; i < number; ++i)
    {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
