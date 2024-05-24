const Wongyoung = {
  firstName: "Wongyoung",
  lastName: "Jiang",
  age: 21,

  calAge: function (birthYear) {
    // function is just a val
    return 2024 - birthYear;
  },
};

console.log(Wongyoung);
console.log(Wongyoung.firstName);
console.log(Wongyoung["firstName"]);

console.log(Wongyoung["age"]);
console.log(Wongyoung.calAge(2004));
