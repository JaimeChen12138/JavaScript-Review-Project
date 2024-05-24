function calcAge1(birthYear) {
  return 2024 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

//Arrow funciton
const calcAge3 = (birthYear) => 2024 - birthYear;

const yearsUnitlRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} has ${retirement} years to work hard`;
};

// console.log(yearsUnitlRetirement(2000, "Wongyoung"));

// --------- add element
const friends = ["Yujin", "Wongyoung"];
friends.push("Liz");

friends.unshift("Gaeul"); // add from left
console.log(friends);

// ------ Remove elements
popped = friends.pop();
console.log(popped);

popedLeft = friends.shift();
console.log(popedLeft);

console.log(friends.indexOf("Yujin"));

friends.push("Gaeul");
console.log(friends.includes("Gaeul")); // return true if in the array
