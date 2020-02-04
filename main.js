function fizzy(num) {
  let output = "";
  if(num % 3 == 0) {
    output += "Fizz";
  }
  if(num % 5 == 0) {
    output += "Buzz";
  }

  if(output.length > 0) {
    return output;
  } else {
    return num;
  }
}

module.exports = {
  fizzy,
}