//ES5 Function that takes a variable number of arguments

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  //ES2015 Function that takes a variable number of arguments
  //BECOMES
  const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


  //findMIN

  findMin(1,4,12,-3) 
findMin(1,-1) 
findMin(3,1) 

const findMIN = (arg) =>  Math.min(...arg)

//mergeObjects

mergeObjects({a:1, b:2}, {c:3, d:4}) 

const mergeObjects = (objs1, obj2) => ({...objs1, ...obj2})


//doubleAndReturnArgs
doubleAndReturnArgs([1,2,3],4,4) 
doubleAndReturnArgs([2],10,4) 

const doubleAndReturnArgs = (arr, ...arg) => [...arr, ...args.map(v => v * 2)]


//Slice and Dice
//items
const items = ['apples', 'paper cups', 'toilet paper', 'cereal']

fconst removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
//arrays
const array1 = ['banana', 'pens', 'magazine', 'water']
const array2 = ['blueberry', 'paper','stapler','chips']

const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

//key and vals

  const addKeyVal = (obj, key, val) => {

    
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

// key remove
const removeKey = (obj, key) => {

    
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}
//combine
const obj1 = ['ballon', 'baseball', 'headphones']
const obj2 = ['phone', 'keys', 'wallet']
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
//update

const update = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj; 
}