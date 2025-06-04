//********* 1.Task: Array Filtering and Mapping **********//
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

const persons: Person[] = [
  { name: "Rahim", age: 30, gender: "male" },
  { name: "Karim", age: 25, gender: "male" },
  { name: "Fatima", age: 28, gender: "female" },
  { name: "Ayesha", age: 22, gender: "female" },
  { name: "Sakib", age: 35, gender: "male" },
];

function getMaleNames(arr: Person[]): string[] {
  // filter() দিয়ে শুধুমাত্র male গুলো বেছে নেয়া এবং তারপর map() করে নাম বের করা
  const result = arr
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
  return result;
}

console.log("Male Names:", getMaleNames(persons)); // Output: Male Names: [ 'Rahim', 'Karim', 'Sakib' ]

//********* 2.Task: Object Manipulation **********//
interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function getBookTitles(arr: Book[]): string[] {
  // প্রতিটি বইয়ের title বের করতে map() ব্যবহার করা হয়েছে
  const result = arr.map((book) => book.title);
  return result;
}
console.log("Book Titles:", getBookTitles(books)); // Output: Book Titles: [ 'The Alchemist', 'Sapiens', '1984' ]

//********* 3.Task: Function Composition **********//
// ফাংশন কম্পোজিশন: একাধিক ফাংশনকে একত্রে ব্যবহার করে একটি নতুন ফাংশন তৈরি করা
const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

// ফাংশন কম্পোজিশন: প্রথম square, তারপর double, শেষে addFive
const composedFunction = (num: number): number => addFive(double(square(num)));
// Calculation: square(3) = 9, double(9) = 18, addFive(18) = 23
console.log("Composed Function Result:", composedFunction(3)); // Output: Composed Function Result: 23

//********* 4.Task: Sorting Objects **********//
// একটি array of objects কে year অনুযায়ী sort করা
interface Car {
  make: string;
  model: string;
  year: number;
}

const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Mazda", model: "3", year: 2012 },
];

function sortCarsByYear(carsList: Car[]): Car[] {
  // মূল array ক্ষতি না করতে new array (spread operator) ব্যবহার করে sort করা
  const result = [...carsList].sort((a, b) => a.year - b.year);
  return result;
}

console.log("Sorted Cars by Year:", sortCarsByYear(cars));
/* Output: Sorted Cars by Year: [
  { make: 'Honda', model: 'Civic', year: 2008 },
  { make: 'Toyota', model: 'Corolla', year: 2010 },
  { make: 'Mazda', model: '3', year: 2012 },
  { make: 'Ford', model: 'Mustang', year: 2015 }
]
*/

//********* 5.Task: Find and Modify **********//
// একটি array থেকে নির্দিষ্ট object খুঁজে বের করা এবং সেটি modify করা
const persons2: Person[] = [
  { name: "Rahim", age: 30, gender: "male" },
  { name: "Karim", age: 25, gender: "male" },
  { name: "Fatima", age: 28, gender: "female" },
  { name: "Ayesha", age: 22, gender: "female" },
  { name: "Sakib", age: 35, gender: "male" },
];

function findAndModifyPerson(
  arr: Person[],
  name: string,
  newAge: number
): Person[] {
  // find() দিয়ে নির্দিষ্ট নামের person খুঁজে বের করা এবং map() দিয়ে age পরিবর্তন করা
  const result = arr.map((person) => {
    if (person.name === name) {
      return { ...person, age: newAge }; // নতুন age সহ নতুন object তৈরি করা
    }
    return person; // অন্যদের অপরিবর্তিত রাখা
  });
  return result;
}

console.log("Modified Persons:", findAndModifyPerson(persons2, "Karim", 50));
/* Output: Modified Persons: Modified Persons: [
   ...Other persons unchanged,
  { name: 'Karim', age: 50, gender: 'male' },
] */

//********* 6.Task: Array Reduction **********//
// একটি array এর সব সংখ্যার যোগফল বের করা
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = (arr: number[]): number => {
  const result = arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      return accumulator + currentValue; // শুধুমাত্র even সংখ্যাগুলোর যোগফল
    }
    return accumulator; // odd সংখ্যাগুলোকে বাদ দেয়া
  }, 0); // accumulator এর প্রাথমিক মান 0
  return result;
};
console.log("Sum of Even Numbers:", sumOfNumbers(numbers)); // Output: Sum of Even Numbers: 30

//********* 7. Task: Leap Year Checker **********//

const isLeapYear = (year: number): boolean => {
  // leap year চেক করার লজিক
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Any year divisible by 400 is a leap year
      }
      return false; // Any year divisible by 100 but not by 400 is not a leap year
    }
    return true; // Any year divisible by 4 but not by 100 is a leap year
  }
  return false; // All other years are not leap years
};

console.log(isLeapYear(2020) ? "Happy New Year" : "Not a Leap Year"); // Output: Happy New Year
console.log(isLeapYear(2025) ? "Happy New Year" : "Not a Leap Year"); // Output: Not a Leap Year

//********* 8.Task: Unique Values **********//

const numbersWithDuplicates: number[] = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8];

const getUniqueValues = (arr: number[]): number[] => {
  // Set ব্যবহার করে unique মান বের করা
  const uniqueValues = Array.from(new Set(arr));
  return uniqueValues;
};

console.log("Unique Values:", getUniqueValues(numbersWithDuplicates)); // Output: Unique Values: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//********* 9.Task: Advanced Sorting **********//

interface Student {
  name: string;
  grades: number[];
}

const students: Student[] = [
  { name: "Alice", grades: [80, 90, 70] },
  { name: "Bob", grades: [85, 95, 80] },
  { name: "Charlie", grades: [60, 70, 75] },
];

const calculateStudentGrades = (grades: number[]): number => {
  const total = grades.reduce((acc, curr) => acc + curr, 0);
  const avg = total / grades.length;
  return avg;
};

const sortStudentsByAverageGrade = (studentsList: Student[]): Student[] => {
  // students কে average grade অনুযায়ী sort করা
  const sortedStudents = [...studentsList].sort((a, b) => {
    const avgA = calculateStudentGrades(a.grades);
    const avgB = calculateStudentGrades(b.grades);
    return avgB - avgA; // descending order
  });
  return sortedStudents;
};

console.log(
  "Sorted Students by Average Grade:",
  sortStudentsByAverageGrade(students)
);
/* Output: Sorted Students by Average Grade: [
  { name: 'Bob', grades: [85, 95, 80] },
  { name: 'Alice', grades: [80, 90, 70] },
  { name: 'Charlie', grades: [60, 70, 75] }
]
*/

//********* 10. Task: Functional Programming - Reduce **********//
interface Item {
  quantity: number;
  price: number;
}

const items: Item[] = [
  { quantity: 2, price: 10 },
  { quantity: 5, price: 4 },
  { quantity: 1, price: 20 },
];

const calculateTotalPrice = (arr: Item[]): number => {
  const total = arr.reduce((acc, cur) => {
    const itemTotal = cur.quantity * cur.price;
    return acc + itemTotal;
  }, 0); // accumulator এর প্রাথমিক মান 0
  return total;
};

console.log("Total Price of Items:", calculateTotalPrice(items)); // Output: Total Price of Items: 70
