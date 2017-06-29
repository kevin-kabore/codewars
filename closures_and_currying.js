// simple add(a+b)

function add(a, b) {
    if (arguments.length < 1) {
        return add;
    } else if (arguments.length < 2) {
        return function(c) { return a + c } //closure: retains value of a
    } else {
        return a + b;
    }
}


// 1. In the first if, we check to see if no arguments were passed.
// If none were passed, we just return the function itself back.

// 2. If one argument was passed, we return a new function,
// which in turn will expect one new argument (c), and add that to the a,
// that we got from the first function.
//    CLOSURE: The ability of the returned function (which has no name if you look),
//    to remember the value of a is one of the principle ideas of closures,
//    and what makes all of this possible in JavaScript.

// If both arguments are passed at once, we just return a + b, like we normally would.


//curry function:
function curry(func,args,space) {
    var n  = func.length - args.length; //arguments still to come
    var sa = Array.prototype.slice.apply(args); // saved accumulator array

    function accumulator(moreArgs,sa,n) {
        var saPrev = sa.slice(0); // to reset
        var nPrev  = n; // to reset

        for(var i=0;i<moreArgs.length;i++,n--) {
            sa[sa.length] = moreArgs[i];
        }
        if ((n-moreArgs.length)<=0) {
            var res = func.apply(space,sa);
            // reset vars, so curried function can be applied to new params.
            sa = saPrev;
            n  = nPrev;
            return res;
        } else {
            return function (){
                // arguments are params, so closure bussiness is avoided.
                return accumulator(arguments,sa.slice(0),n);
            }
        }
    }
    return accumulator([],sa,n);
}

// The central thing, is the array sa, which contains the arguments so far (saved arguments),
// and then the function accumulator, which if called again, with not enough arguments,
// will collect the new arguments into the array sa, and then return,
// as the result, itself, so that the next call, will also collect arguments.
//
// If enough arguments have been collected, the function executes.
// Notice, that the apply uses the closure space to execute in, this is very important, as we shall see in a moment.
//
// Also of importance, is how the arguments array sa is passed as an argument,
// to the new accumulator. Using closures, there is no real need to pass it,
// but using a closure, all curried functions, created like this,
// can only share the same arguments array!
//
// This is obviously not optimal, and there is no real solution I can see
// on this, which is why a copy of the array is passed instead of using closures.




// How to apply it to an add function that takes 3 variables
function add (a,b,c){
    if (arguments.length < this.add.length) {
      return curry(this.add,arguments,this);
    }
    return a+b+c;
}

alert(add()(1,2,4));      // 7
alert(add(1)(2)(5));      // 8
alert(add(1)()(2)()(6));  // 9
alert(add(1,2,7,8));      // 10


// Greet curried
function greet(greeting, name) {
  console.log(greeting + ' , ' + name);
}

function greetCurried(greeting){
  return (name) => {
    console.log(greeting + ' , ' + name)
  }
}

// or

var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ' , ' + name);
  }
}

var greetHello = greetCurried("Hello");// saves Hello as first argument
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"
// or
greetCurried("Hi there")("Howard"); //"Hi there, Howard"


//Curry with multiple arguments
function greetDeeplyCurried(greeting){
  return (separator) => {
    return (emphasis) => {
      return (name) => {
        console.log(greeting + separator + name + emphasis)
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?")
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"
//or
greetDeeplyCurried("Hello")("...")("?")("Heidi") //"Hello...Heidi?"

// different variations here passed in greeting and separator only
var sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi"); //"Hello, Heidi."
sayHello(".")("Eddie"); //"Hello, Eddie."

//And add subordinate variations
var askHello = sayHello("?"); // takes third arg emphasis
askHello("Heidi"); //"Hello, Heidi?"
askHello("Eddie"); //"Hello, Eddie?"


// general currying function
var curryIt = function(uncurried){
  var parameters = Array.prototype.slice.call(arguments, 1);

  return () => {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0);
    ));
  };
}
// To use this, we pass it the name of a function that takes any number of arguments,
// along with as many of the arguments as we want to pre-populate.
// What we get back is a function that’s waiting for the remaining arguments:

function greeter(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

var greeterHello = curryIt(greeter, "Hello", ",", "!")
greeterHello("Kevin"); // "Hello, Kevin!"

// can change how many arguments we want to use when building derivative functions from our
// curried original function
var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe"); //"Goodbye, Joe."

// Currying is useful for partial application. There is a way to reduce functions of more
// than one argument
//currying with es6
multiply = (n, m) => (n * m)
multiply(3, 4) === 12 // true

curryedMultiply = (n) => ( (m) => multiply(n, m) )
triple = curryedMultiply(3)

// uncurrying
curryedMultiply = (n) => (m) => n * m
curryedMultiply(3)(4) === 12 // true

multiply = (n, m) => curryedMultiply(n)(m)
multiply(3, 4) === 12 // true
