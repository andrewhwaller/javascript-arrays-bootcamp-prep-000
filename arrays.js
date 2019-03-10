<<<<<<< HEAD
var chocolateBars=["snickers","hundredgrand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
  return[element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
  array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
  array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
=======
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray() {
array.unshift("element")
array = ["element",...array]
return array
}

function addElementToEndOfArray() {
array.push("element");
}

function destructivelyAddElementToEndOfArray() {

}

function accessElementInArray() {

>>>>>>> 358ae07be2253caf0971d53a45345bd3203eb86f
}
