const inputArray = [1, 7, 3, 4, 6];
const inputArray2 = [2, 3, 6, 8, 10];

const answer = 
    inputArray2
        .map((val) => val ** 2)
        .filter((val) => val % 3 === 1)
        .reduce((sum, val) => {
            return sum + val;
        })

console.log(answer);