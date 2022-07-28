//2.3.1 forEach, map, filter, reduce
const f1 = (elem, index) => {
    console.log(`${index}th element is ${elem}`);
}
const f2 = (e, index) => e * 2;
const f3 = (prev, curr, index) => prev + curr;
const f4 = e => e % 2;

const a = [1, 2, 3, 4, 5].forEach(f1);
console.log(a); // undefined 

const b = [1,2,3,4,5].map(f2);
console.log(b);

const c = [1,2,3,4,5].reduce(f3);
console.log(c);

const d = [1,2,3,4,5].filter(f4);
console.log(d);

//2.3.2 every, some
const nums = [1,3,5,4];
const e = nums.every(e => e % 2);
const f = nums.some(e => e % 2);
console.log(e, f);