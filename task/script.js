// =============== ODD NUMBER TASK -1 ===========================
// == anonymous function ===
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var result = [];

var odd = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd(arr));

// Arrow function

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var result = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd(arr));

// =========== SUM NUMBER TASK -2 ==============================
// anonymous function
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = 0;

var output = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  console.log(res);
};
output(array);
//   Arrow Function
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res1 = 0;
var sum = () => {
  for (var i = 0; i < array1.length; i++) {
    res1 += array1[i];
  }
  console.log(res1);
};
sum(array1);

//  ============= REMOVE DUPLICATE TASK -3 ========================
// anonymous function
let char = ["A", "B", "A", "B", "C", "A"];
var removeDuplicate = function (arr) {
  let unique = [...new Set(arr)];
  console.log(unique);
};
removeDuplicate(char);

//  Arrow function
let chars = ["A", "B", "A", "C", "B"];

let uniqueChars = chars.filter((c, index) => {
  return chars.indexOf(c) === index;
});
console.log(uniqueChars);

// ============ Return all the prime numbers in an array TASK-4 =================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimes(array) {
  return array.filter((num) => isPrime(num));
}

const primeNumbers = findPrimes(numbers);

console.log(primeNumbers);

//Arrow function
const isPrimeArrow = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;

  function findPrimes(array) {
    return array.filter((num) => isPrimeArrow(num));
  }
};
const primeNumbersArrow = findPrimes(numbers);

console.log(primeNumbersArrow);

// === Task-5 Return all the palindromes in an array ====
let array5 = ["abc", "cool", "aba", "racecar", "dog"];
function findPalindrome(arr) {
  var ans = arr.filter((ele) => {
    var rev = ele.split("").reverse().join("");
    if (ele === rev) {
      return ele;
    }
  });
  console.log(ans); // output : aba racecar
}
findPalindrome(array5);

// === Task-6 Convert all the strings to title caps in a string array
let strings = ["gopi", "sandy", "dharsh"];

// split charAt(0).toUppercase()+slpit(1)
function caps(strings) {
  let titleCase = strings.map((ele) => {
    let toLowerCase = ele.toLowerCase();
    let charAt = toLowerCase.charAt(0).toUpperCase();
    return charAt + toLowerCase.slice(1);
  });
  console.log(titleCase);
}
caps(strings);

//arrow function
const capsArrow = (strings) => {
  let titleCase = strings.map((ele) => {
    let toLowerCase = ele.toLowerCase();
    let charAt = toLowerCase.charAt(0).toUpperCase();
    return charAt + toLowerCase.slice(1);
  });
  console.log(titleCase);
};
capsArrow(strings);

// Task-7 Return median of two sorted arrays of the same size.
let nums1 = [1, 12, 15, 26, 38];
let nums2 = [2, 13, 17, 30, 45];
var median = 0;
let merge = nums1.concat(nums2);
let sort = merge.sort(function (a, b) {
  return a - b;
});
if (sort.length % 2 !== 0) {
  median = sort[Math.floor(sort.length / 2)];
} else {
  var mid = sort.length / 2;
  median = (sort[mid - 1] + sort[mid]) / 2;
}
console.log(sort[mid]);
console.log(median);
