// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// ES2015 Version //
const filterOutOdds = (...nums) => nums.filter(v => v % 2 === 0)
//
console.log(filterOutOdds(1,2,3,4,5,6,7,8,9)) //[2, 4, 6, 8]



// findMin //
const findMin = (...nums) => nums.reduce((a, v) => Math.min(a, v), nums[0])
//
console.log(findMin(9, 8, 7, 2, 6, 5, -1, 4)) // -1



// mergeObjects //
const mergeObjects = (a, b) => new Object({...a, ...b})
//
console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}



// doubleAndReturnArgs //
const doubleAndReturnArgs = (arr, ...args) => arr.concat(args.map(n => n * 2))
//
console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]



/** remove a random element in the items array
and return a new array without that item. */
// function removeRandom(items) {
// }
const removeRandom = items => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
  }
//
console.log("Remove Random: " + removeRandom([1, 2, 3, 4, 5, 6]))



/** Return a new array with every item in array1 and array2. */
// function extend(array1, array2) {
// }
const extend = (arr1, arr2) => [...arr1, ...arr2]



/** Return a new object with all the keys and values
from obj and a new key/value pair */
// function addKeyVal(obj, key, val) {
// }
const addKeyVal = (obj, key, val) => {
    return new Object({...obj, [key]: val})
}
//
console.log(addKeyVal({color: "blue", season: "summer"}, 'height', 72))



/** Return a new object with a key removed. */
// function removeKey(obj, key) {
// }
const removeKey = (obj, key) => {
    let n = {...obj}
    delete n[key]
    return n
}
//
console.log(removeKey({color: "blue", season: "summer", height: 72}, "season"))



/** Combine two objects and return a new object. */
// function combine(obj1, obj2) {
// }
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}



/** Return a new object with a modified key and value. */
// function update(obj, key, val) {
// }
const update = (obj, key, val) => {
    let n = {...obj}
    n[key] = val;
    return n;
}