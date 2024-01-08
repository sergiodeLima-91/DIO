const numbers = [5, 3, 2, 4, 10, 11];

const numberMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
});

const ages = [8,13,27,30,22,40];

const evenAges = ages.filter(function(ages) {
    return ages % 2 === 0;
});

console.log(evenAges);