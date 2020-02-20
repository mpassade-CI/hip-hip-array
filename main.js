// Challenge 0
//
// Write a Challenge Banner printing function THAT'S A LITTLE DIFFERENT THAN BEFORE. This one will print out not only "Challenge n", where n is the number passed into it, but will also print n "#" characters to the left and n "#" to the right of the "Challenge n" text. You should also include a space between the "#" characters and the text.
//
function challenge(num){
  console.log('#'.repeat(num) + ' Challenge ' + num + ' ' + '#'.repeat(num))
}
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
challenge(1)
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];
for (let i=0; i<students.length; i++){
  console.log(students[i])
}

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
challenge(2)
const grades = [100, 80, 110, 75, 83, 64];
for (let i=grades.length-1; i>=0; i--){
  console.log(grades[i])
}

// Challenge 3
// Console.log out only the even numbers in the following array.
challenge(3)
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for (let i=0; i<positiveNumbers.length; i++){
  if (positiveNumbers[i]%2===0){
    console.log(positiveNumbers[i])
  }
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
challenge(4)
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (let i=0; i<mixedSignNumbers.length; i++){
  if (mixedSignNumbers[i]%2===0){
    console.log(mixedSignNumbers[i])
  }
}

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, and then console.log out each value individually.
challenge(5)
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
const removeFront = symmetricalCapitals.splice(0,2)
const removeBack = symmetricalCapitals.pop()
for (let i=0; i<symmetricalCapitals.length; i++){
  console.log(symmetricalCapitals[i])
}
// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
challenge(6)
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
const addFront = fibonacciNumbers.unshift(0)
const addBack = fibonacciNumbers.push(20,20)
for (let i=0; i<fibonacciNumbers.length; i++){
  console.log(fibonacciNumbers[i])
}

// Challenge 7
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
challenge(7)
const newArr = [5,4,3,2,1]
for (let i=0; i<newArr.length; i++){
  console.log(newArr[i])
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using .push and/or .unshift, and then console.log out each value individually.
challenge(8)
const emptyArr = []
const addToEmptyArr = emptyArr.unshift(1,2,3,4,5)
for (let i=0; i<emptyArr.length; i++){
  console.log(emptyArr[i])
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
challenge(9)
for (let i=3; i<=10; i++){
  console.log(students[i])
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
challenge(10)
const newStudents = []
for (let i=3, x=[]; i<=10; i++){
  x = newStudents.push(students[i])
}
for (let i=0; i<newStudents.length; i++){
  console.log(newStudents[i])
}
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally. THEN log out each value of the original array. Slice does NOT modify the original array.
challenge(11)
const newStudents11 = students.slice(3, 11)
for (let i=0; i<newStudents11.length; i++){
  console.log(newStudents11[i])
}
for (let i=0; i<students.length; i++){
  console.log(students[i])
}

// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. .splice WILL change the original array.
challenge(12)
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
const removedDino = dinosaurs.splice(4,3)
for (let i=0; i<dinosaurs.length; i++){
  console.log(dinosaurs[i])
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
challenge(13)
console.log(dinosaurs.join('*'))

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
challenge(14)
dinosaurs.reverse()
console.log(dinosaurs)

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. .concat does NOT mutate the original arrays.
challenge(15)
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const finalArr = primaries.concat(secondaries)
for (let i=0; i<finalArr.length; i++){
  console.log(finalArr[i])
}
