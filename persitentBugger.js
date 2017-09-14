function persistence(num) {
  //code me
  function recursive(num, counter) {
    let arr = num
      .toString()
      .split('')
      .map(Number);
    if (arr.length === 1) {
      // base case
      return counter;
    } else {
      // recursive case
      let newNum = arr.reduce((sum, val) => {
        return sum * val;
      });
      counter += 1;
      return recursive(newNum, counter);
    }
  }

  let count = 0;
  return recursive(num, count);
}
