const findTheOldest = function(people) {
    return people.reduce((prev, curr) => {
        let currAge = curr.yearOfDeath - curr.yearOfBirth;
        let prevAge = prev.yearOfDeath - prev.yearOfBirth;

        if(curr.yearOfDeath === undefined)
        {
            currAge = new Date().getFullYear() - curr.yearOfBirth;
        }

        if(prev.yearOfDeath === undefined)
        {
            prevAge = new Date().getFullYear() - prev.yearOfBirth;
        }

        if(currAge > prevAge)
        {
            return curr;
        }
        else
        {
            return prev;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
