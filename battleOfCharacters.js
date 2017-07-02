// Battle of characters codewars
// Description:

// Groups of characters decided to make a battle. Help them to figure out wha group is more powerful. Create a function that will accept 2 variables and return one who's stronger.

// Rules:

// Each caracter have it's own power: A = 1, B = 2, ... Y = 25, Z = 26 and so on.
//  1. Only capital chatacters can participate a battle.
//  2. Only two groups to a fight.
//  3. Group whose total power (A + B + C + ...) bigger - won.
//  4. If the powers are equal - it's a tie.

function battle(x, y) {
  // Lets the battle begin!

  var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var char1 = x.split('').map((letter) => {return letter.toLowerCase()}),
      char2 = y.split('').map((letter) => {return letter.toLowerCase()});

  var char1Power = 0;
  var char2Power = 0;

  char1.forEach((letter) => {
    var value = char.indexOf(letter) + 1
    char1Power += value;
  });

  char2.forEach((letter) => {
    var value = char.indexOf(letter) + 1
    char2Power += value;
  });

  if(char1Power > char2Power) {
    return x;
  } else if (char2Power > char1Power)  {
  return y;
  } else { return "Tie!" }
}
