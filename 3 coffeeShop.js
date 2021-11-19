/*Write a class called CoffeeShop.*/

const menu = [
  {
    name: "Latte",
    type: "drink",
    price: 2,
  },
  {
    name: "Ice Cream",
    type: "food",
    price: 1,
  },
  {
    name: "Americano",
    type: "drink",
    price: 3,
  },
  {
    name: "Tea",
    type: "drink",
    price: 4,
  },
  {
    name: "Cake",
    type: "food",
    price: 5,
  },
];

const foodTypes = {
  drink: 'drink',
  food: 'food',
};

class CoffeeShop {
  constructor(name, menu){
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(itemName){
    return this.menu.find(({name}) => name === itemName) ? this.orders.push(itemName) : 'This item is currently unavailable!'
  }
  
  fulfillOrder(){
    return this.orders.length ? `The ${this.orders.shift()} is ready!` : 'All orders have been fulfilled!'
  }
  
  listOrders(){
    return this.orders;
  }
  
  dueAmount(){
    return this.menu.reduce((acc, {name, price}) => {
      return this.orders.includes(name) ? acc + price : acc;
    }, 0)
  };
  
  cheapestItem(){
    const tmpMenu = [...menu];
    tmpMenu.sort((a, b) => a.price - b.price);
    const {name} = tmpMenu[0];
    return name;
  }
  
  drinksOnly(){
    return menu.map(({name, type}) => {
      if(type === foodTypes.drink){
        return name
      }
    }).filter(item => item);
  }
  
  foodOnly(){
    return menu.map(({name, type}) => {
      if(type === foodTypes.food){
        return name
      }
    }).filter(item => item)
  }
  
}

const sturbucks = new CoffeeShop('Starbucks', menu);

console.log(sturbucks.addOrder('hot cocoa'))
console.log(sturbucks.addOrder('iced tea'))
sturbucks.addOrder('Latte');
sturbucks.addOrder('Americano');
sturbucks.addOrder('Cake');
sturbucks.fulfillOrder();
sturbucks.listOrders();
sturbucks.dueAmount();
sturbucks.cheapestItem();
sturbucks.drinksOnly();
sturbucks.foodOnly();