/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero(callbackFunction) { return callbackFunction ? Math.floor( eval(0 + callbackFunction) ) : 0; }
function one(callbackFunction) { return callbackFunction ? Math.floor( eval(1 + callbackFunction) ) : 1; }
function two(callbackFunction) { return callbackFunction ? Math.floor( eval(2 + callbackFunction) ) : 2; }
function three(callbackFunction) { return callbackFunction ? Math.floor( eval(3 + callbackFunction) ) : 3; }
function four(callbackFunction) { return callbackFunction ? Math.floor( eval(4 + callbackFunction) ) : 4; }
function five(callbackFunction) { return callbackFunction ? Math.floor( eval(5 + callbackFunction) ) : 5; }
function six(callbackFunction) { return callbackFunction ? Math.floor( eval(6 + callbackFunction) ) : 6; }
function seven(callbackFunction) { return callbackFunction ? Math.floor( eval(7 + callbackFunction) ) : 7; }
function eight(callbackFunction) { return callbackFunction ? Math.floor( eval(8 + callbackFunction) ) : 8; }
function nine(callbackFunction) { return callbackFunction ? Math.floor( eval(9 + callbackFunction) ) : 9; }

function plus(callbackFunction) { return "+" + callbackFunction; }
function minus(callbackFunction) { return "-" + callbackFunction; }
function times(callbackFunction) { return "*" + callbackFunction; }
function dividedBy(callbackFunction) { return "/" + callbackFunction; }
