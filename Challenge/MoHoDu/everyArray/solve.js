const inputArray = [2, 4, 6, 8, 10];
const case2 = [2, 3, 6, 8, 10];

const answer = case2.every((val) => {
    return val % 2 === 0;
})

console.log(answer);