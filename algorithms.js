// Pseudocode for binary search, modified for searching in an array.
// The inputs are the array, which we call array;
// the number n of elements in array;
// and target, the number being searched for.

// The output is the index in array of target:


// 1. Let min = 0 and max = n-1.
// 2. If max < min, then stop: target is not present in array. Return -1.
// 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
// 4. If array[guess] equals target, then stop. You found it! Return guess.
// 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
// 6. Otherwise, the guess  was too high. Set max = guess - 1.
// 7. Go back to step 2.


// binary search
function binarySearch (array, targetValue) {
	var min = 0;
	var max = array.length - 1;
  var guess;

   while (min <= max) {
       guess = Math.floor((min + max) /2);
       if(array[guess] === targetValue){
           return guess;
       } else if(array[guess] < targetValue){
           min = guess + 1;
       } else {
          max = guess - 1;
       }
   }
	return -1;
};


// With logging for total guesses and tests;
function binarySearch(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var totalGuess = 0;

   while (min <= max) {
       guess = Math.floor((min + max) /2);
       println(guess);
       totalGuess++;
       if(array[guess] === targetValue){
           println(totalGuess);
           return guess;
       } else if(array[guess] < targetValue){
           min = guess + 1;
       } else {
            max = guess - 1;
       }
   }
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = binarySearch(primes, 73);

println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 83), 22);
Program.assertEqual(doSearch(primes, 11), 4);
