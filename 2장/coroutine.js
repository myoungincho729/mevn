//제너레이터를 이용한 코루틴
//코루틴 : 함수의 작동 시점을 자유자재로 구현하는 것
const log = console.log;
function *map(f, list) {
    for (const a of list){
        yield f(a);
    }
}
const add = a => a + 10;
const a = [1,2,3,4,5];
const customGen = map(add, a);
log(customGen.next());
log('1');
log(customGen.next());
log('2');
log(customGen.next());
log('3');
log(customGen.next());
log('4');
log(customGen.next());
log('5');
log(customGen.next());
const customGen1 = map(add, a);
log([...customGen1]);

function *gen(){
    yield 10
    if (false) yield 20
    yield 30
    return 90
    yield 40
}
let iter = gen();
log([...iter]);
iter = gen();
for(const a of iter) log(a);