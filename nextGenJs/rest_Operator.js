// Rest operator is used to merge a list of function arguments into an array
const filter = (...args) => {
  return args.filter(e  => e === 2);
};

console.log(filter(1,2,3)); // [2]