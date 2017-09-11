function solution(number) {
  // loop from 0 to < number
  let arr = [];
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(i);
    } else if (i % 3 === 0) {
      arr.push(i);
    } else if (i % 5 === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return 0;
  }
  let total = arr.reduce((sum, value) => {
    return sum + value;
  });
  return total;
}
