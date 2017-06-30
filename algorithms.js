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


// RUNTIME of Binary search: max gusses = number of times can halve, starting at n until we get 1, plus one
// 2^n = length of array; where n + 1 = total guesses

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


// Selection sort
// Loops over positions in the array. For each position, it finds the index of the
// minimum value in the subarry starting at that position.
// Then it swaps the values at the position and at the minimum index

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function indexOfMinimum(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if(array[i] < minValue) {
        minIndex = i;
        minValue = array[i];
    }
  }
  return minIndex;
}

function selectionSort(array) {
  var minIndex;
  for (var i = 0; i < array.length; i++) {
    minIndex = indexOfMinimum(array, i);
    swap(array, i, minIndex);
  }
}


////////////////////
//// Project ///////
////////////////////
var displayArray = function(array) {
    textFont(createFont("monospace"), 12);


};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
var indexOfMinimum = function (array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1 ; i < array.length; i++){
      if(array[i] < minValue) {
        minIndex = i;
        minValue = array[i];
      }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var minIndex;
    for(var i = 0; i < array.length; i++) {
      minIndex = indexOfMinimum(array, i);
      swap(array, i, minIndex);
      println(array)
    }

};

var array = [2, 1, 4, 7, 10, 55, 23];
array = selectionSort(array);



//elipse and line logic attributed form external source
fill(0, 0, 0);
var x = 5, y = 12, x_gap = 20, y_gap = 20; // Initial coordinates


var displayArray = function(array) {
    x = 5;
    textFont(createFont("monospace"), 12);

    for (var i = 0; i < array.length; i++) {
        text(array[i], x, y); //write array
        x += x_gap; // move over 20 px
    }
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
var indexOfMinimum = function (array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1 ; i < array.length; i++){
      if(array[i] < minValue) {
        minIndex = i;
        minValue = array[i];
      }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var minIndex;
    for(var i = 0; i < array.length; i++) {
      displayArray(array);
      minIndex = indexOfMinimum(array, i);

      if (i !== minIndex) { //draw only if swapped different values
        // draw from minIndex to the i
        line(minIndex * x_gap + 10, y + 5, i * x_gap + 10, y + 10);
        // draw from i to minIndex
        line(i * x_gap + 10, y + 5, minIndex * x_gap + 10, y + 10);
          stroke(255, 0, 0);
          noFill(); // for transparent circles
          //an elipse centered at the indices with same width and height is a circle
          ellipse(i * x_gap + 8, y - 4, 12, 12);
          ellipse(minIndex * x_gap + 8, y-4, 12, 12);
          stroke(0,0,0); // reset stroke color
      }
      swap(array, i, minIndex);
      y += y_gap;
      println(array);
    }
    displayArray(array);
    y += y_gap;

};

var array = [10, 9, 7, 8];
array = selectionSort(array);
line(x-600, y -10, x, y - 10);

array = [100, 99, 88, 11];
selectionSort(array);
line(x-600, y -10, x, y - 10);

array = [10, 9, 8, 7];
selectionSort(array);
line(x-600, y -10, x, y - 10);

array = [205, 7, 9, 2];
selectionSort(array);
line(x-600, y -10, x, y - 10);


////////////////////////////////
////////////////////////////////
//////// Insertion Sort ////////
////////////////////////////////
////////////////////////////////

var insert = function(array, rightIndex, value) {
    for(var i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i+1] = array[i];
    }
    array[i+1] = value;
};


// Insertion sort Pseudocode
// 1. Call insert to insert the element that starts at index 1 into the sorted subarray in index 0.
// 2. Call insert to insert the element that starts at index 2 into the sorted subarray in indices 0 through 1.
// 3. Call insert to insert the element that starts at index 3 into the sorted subarray in indices 0 through 2.
// 4. …
// 5. Finally, call insert to insert the element that starts at index n-1 n−1n, minus, 1 into the sorted subarray in indices 0 through n-2 n−2n, minus, 2.


var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++) {
        insert(array, i-1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

array = [10, -5, 12, 1, 10, 8, 3];
insertionSort(array);
Program.assertEqual(array, [-5, 1, 3, 8, 10, 10, 12]);
