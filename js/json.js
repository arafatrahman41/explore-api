const user = {id: 1, name: 'Amir chan', job: 'actor'};
//JavaScript Object Notation(JSON)  
const stringified = JSON.stringify(user);
// console.log(user); 
// console.log(stringified)

/* 
{ id: 1, name: 'Amir chan', job: 'actor' }
{"id":1,"name":"Amir chan","job":"actor"}
*/

const shop = {
    owner: 'Alia', 
    address: {
        street: 'bollywood street',
        city: 'ranbir', 
        country: 'india'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000, 
    isOpen: true,
    isNew: false
}
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)