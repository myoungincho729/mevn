//2.8.1 iterable
const a = ['a','b','c','d'];
console.log(Symbol.iterator in a); //어떤 객체가 Symbol.iterator 메서드를 가지는지
for (let b of a) console.log(b);

let mp = new Map();
mp.set('qq','ww'); //key - value
mp.set('ee','rr');
console.log(mp.get('qq')); //  key로 value 찾기
for (const aa of mp) console.log(aa); // [key, value] 배열로 나옴
console.log(Symbol.iterator in mp); // true

//2.8.2 iterator
const it = a[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // done : 마지막 값이 소비되었는지 여부

//2.8.3 generator
//함수 자체가 이터러블하며 커스텀한 이터러블을 만들 때 사용됨
const log = console.log
function* gen() {
    yield 10
    if(false) yield 20
    yield 30
    return 90
    yield 30
}
let iter = gen();
console.log(iter);
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

log([...gen()]);

//Array.prototype.map 을 generator로 구현 예제
const add = a => a + 10;
const c = [1,2,3,4,5];
const ret = c.map(add);
console.log(ret); // [ 11, 12, 13, 14, 15 ]

function *map(f, list){
    for (const a of list){
        yield f(a);
    }
}
console.log(map(add, c));
console.log([...map(add, c)]);