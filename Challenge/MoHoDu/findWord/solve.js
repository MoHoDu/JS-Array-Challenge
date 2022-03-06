const inputArray = ['맛있는', '용가리치킨'];

const answer = inputArray.filter((val) => {
    return (val.includes('용가리'))
});

console.log(answer);