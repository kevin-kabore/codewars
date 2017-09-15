// This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
//
// Explanation:
//
// square() must return a copy of the array, containing all values squared, the original array must not be changed
// cube() must return a copy of the array, containing all values cubed, the original array must not be changed
// average() must return the average of all array values, average() on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers, the original array must not be changed
// odd() must return an array of all odd numbers, the original array must not be changed

if (!Array.prototype.square) {
  Array.prototype.square = function() {
    let newArr = [];
    this.forEach(num => {
      let sq = num * num;
      newArr.push(sq);
    });
    return newArr;
  };
}

if (!Array.prototype.cube) {
  Array.prototype.cube = function() {
    let newArr = [];
    this.forEach(num => {
      let cub = num * num * num;
      newArr.push(cub);
    });
    return newArr;
  };
}

if (!Array.prototype.average) {
  Array.prototype.average = function() {
    if (this.length === 0) {
      return NaN;
    } else {
      let total = this.reduce((sum, value) => {
        return sum + value;
      });
      let avg = total / this.length;
      return avg;
    }
  };
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function() {
    let total = this.reduce((sum, value) => {
      return sum + value;
    });
    return total;
  };
}

if (!Array.prototype.even) {
  Array.prototype.even = function() {
    let evenArr = [];
    this.forEach(num => {
      if (num % 2 === 0) {
        evenArr.push(num);
      }
    });
    return evenArr;
  };
}

if (!Array.prototype.odd) {
  Array.prototype.odd = function() {
    let oddArr = [];
    this.forEach(num => {
      if (num % 2 !== 0) {
        oddArr.push(num);
      }
    });
    return oddArr;
  };
}
