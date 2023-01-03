const prime = (input: number) => {
  for (let index = 2; index < input; index++) {
    if (input % index === 0) {
      return `${input} not a prime number`;
    }
  }
  return `${input} is a prime number`;
};

console.log(prime(5));
