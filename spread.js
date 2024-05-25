const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
//console.log(newArr);

const restaurant = {
  loc: "ca",
  menu: ["Pizza", "kfc"],
};

// spread the array into individual elements
const newMenu = [...restaurant.menu, "Gnocci"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.menu];

// ... can be used in Iterables: arrays
// strings, maps, sets, NOT objects
// objs can use ... now

const str = "Yu";
const letters = [...str, "Jin"];
console.log(letters); //[ 'Y', 'u', 'Jin' ]

const restaurantCopy = { ...restaurant };
restaurantCopy.loc = "Sea";
console.log(restaurantCopy.loc);
console.log(restaurant.loc);

// REST, on the left side of ==
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
