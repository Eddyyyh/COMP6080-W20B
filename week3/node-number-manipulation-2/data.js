const numbers = [
  406, 646, 199, 996, 989, 47, 55, 614, 293, 407, 287, 605, -56, 960, 832, 25,
  596, 541, -577, 56, 878, 483, 681, 17, 73, 428, -757, 923, 748, 619, 117, 588,
  -661, -267, 571, 95, 923, 386, 507, 243, -868, -797, 344, 660, 34, 945, -424,
  -169, 344, 601, 277, 478, 562, 863, 887, 172, 23, 995, 999, 2, 12, 476, 755,
  617, 155, 698, 91, 1, 481, 971, 371, 164, 220, 854, 590, 364, 446, 254, 980,
  469, 738, 866, 297, 410, 407, 576, 893, 319, 866, 501, 939, 536, 380, 331,
  438, 76, 423, 951, 459, 425,
];

// A list of all negative numbers, in ascending order, surrounded by [ and ], e.g. [ -4, -2, -1 ]
const listNegativeNums = (numbers) => {
  const negativeNumbers = numbers.filter((currNum) => {
    return currNum < 0;
  })
  const sortedNegativeNums = negativeNumbers.sort((a, b) => a - b);
  console.log(`[ ${sortedNegativeNums} ]`)
};

listNegativeNums(numbers);

// A single number that is the average of all positive numbers divisible (without remainder) by 6, .e.g. 8.4
function customAverage(numbers) {
  const positiveNumbers = numbers.filter((currNum) => currNum > 0 && currNum % 6 === 0)
  console.log(positiveNumbers)

  const sum = positiveNumbers.reduce((sum, currNum) => sum + currNum)

  const average = sum / positiveNumbers.length;
  console.log(average)
}

customAverage(numbers)

// A list of all numbers great than 600, as they appear in the list, but printed in reverse order, e.g. [ 620, 610, 800 ]
const listLargeNumbersReversed = function (numbers) {
  const largeNumbers = numbers.filter((number) => {
    return number > 600;
  });
  const reversedLargeNums = largeNumbers.reverse();
  console.log(`List of large numbers in reverse = ${reversedLargeNums}`);
};

listLargeNumbersReversed(numbers);

