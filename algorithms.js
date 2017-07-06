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


////////////////////////////////
////////////////////////////////
///////// Recursion ////////////
////////////////////////////////
////////////////////////////////

// example factorials

var factorial = function(n) {
    var result = 1;
    for(var i = n; i > 0; i--){
        result = result * i;
    }

    return result;
};

// Recursive factorial function
var factorial = function(n) {
	var result = 1;
	// base case:
	if(n === 0){
	    return 1;
	}
	// recursive case:
	return factorial(n-1) * n;
};
// 1. Each recursive call should be on a smaller instance of the same problem, that is, a smaller subproblem.
// 2. The recursive calls must eventually reach a base case, which is solved without further recursion.

// Palindrome function
// 1. if string length is 0 or 1 > true
// 2. else
//      first and last same?
// False? Not palindrome
//      remove first and last call Pal with prev answer
//


var isPalindrome = function(str) {
    // base case #1
    if (str.length <= 1) {
        return true;
    }
    // base case #2
    if(firstCharacter(str) !== lastCharacter(str)) {
        return false;
    } else { // recursive case
       return isPalindrome(middleCharacters(str));
    }

};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};


  // Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};



//////////////////////////////////
//////////////////////////////////
//////// Recursive Powers ////////
//////////////////////////////////
//////////////////////////////////
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case

    if(n === 0) {
        return 1;
    } else if(n < 0) { // recursive case: n is negative
        return 1/power(x, -n);
    }

    if(isOdd(n)) { // recursive case: n is odd
        return x(power(x, n-1));
    } else if(isEven(n)) { // recursive case: n is even
      var p = power(x, n/2);
      return p * p;
    }
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);

//////////////////////////////
//////////////////////////////
//////// Merge Sort /////////
//////////////////////////////
//////////////////////////////


// Divide, conquer, combine
var mergeSort = function(array, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) /2); // middle array index
        mergeSort(array, p, q);
        mergeSort(array, q+1, r);
        merge(array, p, q, r);
    }

};


//////

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while(i < lowHalf.length && j < highHalf.length){
        if (lowHalf[i] < highHalf[j]) {
          array[k] = lowHalf[i];
          i++;
          k++;
        } else {
          array[k] = highHalf[j];
          j++;
          k++;
        }
    }


    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while(i < lowHalf.length){
        array[k] = lowHalf[i];
        i++;
        k++;
    }
    while(j < highHalf.length) {
      array[k] = highHalf[j];
      j++;
      k++;
    }
};


var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);




/////////////////////////////
/////////////////////////////
//////// Quick Sort /////////
/////////////////////////////
/////////////////////////////

//Worst case same as selection and insertion sort
// Theta(n^2)
// Average case as good as merge sort Theta(nlgn)


// 1. Dive step: Partioning
// Divide by choosing any element in the subarray array[p..r]. Call this element the pivot.
// Rearrange the elements in array[p..r] so that all other elements in array[p..r]
// that are less than or equal to the pivot are to its left and all elements in array[p..r]
// are to the pivot's right
////// ALWAYS choose array[r] as the pivot
////// After partitioning, let q be the index where the pivot ends up

// 2. Conquer by recursively sorting the subarrays array[p..q-1] (all elements to the left of the pivot,
// which must be less than or equal to the pivot) and array[q+1..r] (all elements to the right of the pivot,
// which must be greater than the pivot).

// 3. Combine: no need all already sorted since [p..q-1] are < than q and [q+1...r] are > q
