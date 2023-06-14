const random10 = () => {
  const random = Math.floor(Math.random() * 10);
  return random;
};

const random100 = () => {
  const random = Math.floor(Math.random() * 100);
  return random;
};

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export { random10, random100, isPrime };
