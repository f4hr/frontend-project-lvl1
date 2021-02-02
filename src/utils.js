const getRandomIntInclusive = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin + 1)) + roundMin;
};

const isEven = (num) => (num % 2 === 0);

const gcd = (num1, num2) => {
  if (num1 % num2) {
    return gcd(num2, num1 % num2);
  }

  return Math.abs(num2);
};

export { gcd, isEven, getRandomIntInclusive };
