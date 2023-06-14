const random10 = () => {
  const random = Math.floor(Math.random() * 10);
  return random;
};

const random100 = () => {
  const random = Math.floor(Math.random() * 100);
  return random;
};

export { random10, random100 };
