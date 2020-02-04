function fizzy(num) {
  let output = "";

  if(num % 3 == 0) {
    output += "Fizz";
  }
  if(num % 5 == 0) {
    output += "Buzz";
  }

  return output ? output : num;
}

module.exports = {
  fizzy,
}