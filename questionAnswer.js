const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000} 
];

item.sort((a, b) => {
    return a.price - b.price;
});

const cheapProduct = item[0];
const expensiveProduct = item[item.length - 1];

console.log(`1. Cheap product: ${cheapProduct.name}, price: ${cheapProduct.price} dollars`);
console.log(`2. Expensive product: ${expensiveProduct.name}, price: ${expensiveProduct.price} dollars`);

const totalPrice = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price;    
    }

    return total;
};

console.log(`3. Full price of all products combined: ${totalPrice(item)} dollars`);

const totalPriceWithCondition = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= 10) {
            total += arr[i].price; 
        }   
    }

    return total;
};

console.log(`4. Full price of all products combined, products under 10 dollars removed: ${totalPriceWithCondition(item)} dollars`);
