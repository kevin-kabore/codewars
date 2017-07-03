// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  //may the code be with you
  var stringArr = (''+num).split('')
  var numArr = stringArr.map((n) => {
    return parseInt(n, 10)
  })
  var squares = numArr.map((n) => {
    return n * n;
  })
  return parseInt(squares.join(''))

}
