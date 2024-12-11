// Named Parameters

// write a function that takes two named parameters:
function twoNumbers({num1, num2}) {
  console.log("First number:", num1);
  console.log("Second number:", num2);
  return num1 + num2;
}
// print each named parameter,
console.log(functionWithTwoParams(5,10));
// then return the parameters added together
console.log(functionWithTwoParams(5, 10, 4, 60));
// invoke the function and pass in two numbers
console.log(functionWithTwoParams(5));
// invoke the function and pass in more than two numbers
function functionWithDefaultParams({param1 = 0, param2 = 9}) {
  console.log(param1, param2);
  return param1 + param2;
// invoke the function and pass in only one number

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
console.log(functionWithDefaultParams(5));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParams({param1, param2 = 9 ...param3}) {
  console.log(param1, param2);
// again, invoke the function and pass in more than two numbers
console.log
