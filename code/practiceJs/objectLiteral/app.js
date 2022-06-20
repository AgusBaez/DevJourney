//El objeto Producto // CREANDO UN OBJETO
const product = [
  {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"],
    false: true,
  },
  {
    name: "Candy",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"],
    false: true,
  }
];
console.log(product);

//Ubicacion de restauranL OBJETO
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};
console.log(restaurant);
const fullAddress =
  restaurant.address +
  " " +
  restaurant.city +
  " " +
  restaurant.state +
  " " +
  restaurant.zipcode;
console.log(fullAddress);

//MODIFICANDO UN OBJETO
product[0].price = 3.99;
product[1].iva = "21%";
product[0].flavors[(0, 3)] = "Pink";
console.log(product);
