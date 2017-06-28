// //Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted set with difference.
//
// The collections can contain any character and can contain duplicates.
//
// For instance:
//
// A = [a,a,t,e,f,i,j]
//
// B = [t,g,g,i,k,f]
//
// difference = [a,e,g,j,k]


function diff(a, b){
  let difference;

  deleteDups(a);
  deleteDups(b);

  difference = a.concat(b).sort()


  for(var i = 0; i < difference.length; i++) {
    if (difference[i] === difference[i+1]) {
      difference.splice(i,2);
      i--
    }
  }
  return difference



  function deleteDups(array){
    array.sort()
    for (var i = 0; i < array.length; i++){
      if(array[i] === array[i+1]) {
        array.splice(i,1)
        i--
      }
    }
  }
}
