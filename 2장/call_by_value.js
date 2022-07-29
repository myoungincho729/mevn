//자바스크립트의 call by value
//함수의 매개변수로 넘길 때 ->call by value로 넘겨짐, 매개변수가 복사되는 것을 뜻함
//기본형 : 함수 바깥의 변수와 상관없이 동작
//참조형이 전달된 경우 - 객체의 주솟값이 복사되고 넘긴 매개변수의 객체 속성값이 변경되면 함수 바깥의 변수도 변경됨

const f1 = obj => {
    obj = null
}
let b1 = {"a": 1}
console.log(b1); // { a: 1 }
f1(b1);
console.log(b1); // { a: 1 } b1이라는 객체를 null 로 만드는것 같지만 아님 -> obj에는 주솟값의 복사본이 들어가고 또다른 주솟값에 null이 할당됨

let b2 = [1,2,3]
let a2 = b2
const f2 = array =>{
    array[0] = 4
    array = null 
}
f2(b2)
console.log(b2) // [] : null이 아님

const swap = (a, b) =>{
    let tmp = a;
    a = b;
    b = tmp;
}
let x = 1;
let y = 2;
swap(x, y);
console.log(x, y) // 1 2 : 스왑이 일어나지 않음

//객체의 속성변화는 ?
const a = {"a": 1}
const b = c => {c.a = 2};
b(a);
console.log(a); // { a: 2} 객체의 속성이 변하게 됨. 

//참조형의 복사본인 객체를 전달하고 이 객체는 다른 주솟값을 갖지만 둘 다 똑같은 {"a": 1}을 바라보고 있기 때문
//이 상태에서 c의 속성이 변화하면 같은 값을 바라보고 있는 a의 속성도 변하게 됨

//자바스크립트의 참조형과 기본형
//참조형(reference type) : 객체(object), 배열(array), 함수(function), 날짜(date), 정규표현식(RegExp)
//기본형(primitive type) : number, string, boolean, null, undefined, symbol