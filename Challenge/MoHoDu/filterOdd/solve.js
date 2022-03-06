inputArray = [4, 2, 5, 1, 3];

const answer = inputArray.filter((val) => {
    return (val % 2 === 1)
});

console.log(answer);