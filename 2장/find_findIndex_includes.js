//2.4.1 find, findIndex
const a = elem => elem.height >= 180;
const friends = [
    {'name':'brian', 'height': 173},
    {'name':'paul', 'height': 175},
    {'name':'ryan', 'height': 180},
    {'name':'chris', 'height': 193}
]
const tallGuys = friends.find(a);
const tallIndex = friends.findIndex(a);
console.log(tallGuys, tallIndex);

//2.4.2 includes
const b = [1,2,3,4,5];
console.log(b.includes(3)); //true of false

const ret = b.indexOf(3); // return its index
const ret2 = b.findIndex(e => e===3);
console.log(ret, ret2);