const restaurants = [
  { id: '1', name: 'Pizza Palace', cuisine: 'Italian', rating: 4.5, isOpen: true, menu: ['Margherita', 'Pepperoni', 'Garlic Bread'] },
  { id: '2', name: 'Burger Haven', cuisine: 'Fast Food', rating: 4.2, isOpen: false, menu: ['Cheeseburger', 'Fries', 'Milkshake'] }
];

const orders = [
  { id: '101', customer: 'Alice', restaurantId: '1', total: 25.50, status: 'Delivered' }
];

module.exports = { restaurants, orders };
