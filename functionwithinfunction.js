// Description:
//
// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
//
// var three = always(3);
// three(); // returns 3


// Solution:

function always (n) {
  function returnn() {
    return n;
  }
  return returnn;
}
