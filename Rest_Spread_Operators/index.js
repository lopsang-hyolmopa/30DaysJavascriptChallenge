// Write a function joinStrings(separator, ...strings) that joins multiple strings using the provided separator.

function joinStrings(separator, ...strings) {
  return strings.join(separator)
}

console.log(joinStrings('-', 'the', 'ultmiate', 'javascript'))

// Create a function mergeObjects(obj1, obj2, ...restObjects) that merges multiple objects into one.

obj1 = {
  name: 'Ram',
  age: 22
}

obj2 = {
  brand: 'Bajaj',
  price: '220'
}

function mergeObjects(obj1, obj2, ...restObjects) {
  const singleObj = Object.assign({}, ...restObjects)
  
  return {
    ...obj1, 
    ...obj2,
    ...singleObj
  }
}

console.log(mergeObjects(obj1, obj2, {title: 'Developer', salary: '3000'}, {error: 'true', message: 'Invalid request!'}))

// Write a program that flattens a nested array using Spread and recursion, e.g., [[1, 2], [3, [4, 5]]] → [1, 2, 3, 4, 5].
function flattenArray(array) {
  const arrays = array.map((a) => a)
  console.log(arrays)
  // if(array.length === 1) {
  //   const 
  //   flattenArray(array)
  // }
  
}

flattenArray([[1, 2], [3, [4, 5]]])
