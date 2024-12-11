create an Array using an Array literal
let myArray = ["Never", "Gonna", "Give", "You", "What"];
// access the 1st item in the Array
console.log(myArray[0]);
// access the last item in the Array
console.log(myArray[-1]);
// print the length of the Array
console.log(myArray.length);
// use the length property to access the last item in the Array
console.log(myArray.length -1);
// with for...of, loop over the Array, modify the value and add to a different Array
let yourArray =[]
for (let item in myArray) {
  yourArray[index] = myArray[item] + " the sequel";
  // yourArray.push(myArray[item] + "2");
}

console.log(yourArray);
