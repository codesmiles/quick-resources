// This is the walkthrough of the reduce function

const arr = [15, 16, 17, 18, 19];

console.log(
  arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
);

// ...arr is the rest/spread operator can be used to convert values into an array in the function though it has many other uses you can simply google it annd all
// accumulator is the sum of the squares and can also serve as initial value if the initial value is not given
// current value is the value of each array element
// 0 is the initial value

// based on the question
function sumOfsquares(...arr) {
  const incoming = arr.reduce((accumulator, currentValue) => {
    return accumulator + Math.pow(currentValue, 2);
  }, 0);

  return incoming;
}

// So no matter how many arguments are passed in, the reduce function will always evaluate it as an array and yeild the desired result
console.log(sumOfsquares(2, 2, 3, 4, 5));
