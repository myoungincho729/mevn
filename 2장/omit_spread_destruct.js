//2.6 구문 생략, spread 연산자, 구조분해 할당

//2.6.1 구문 생략
const name ='brian';
const age = '26';
const job = 'developer';
const data1 = {name, age, job}; // without declaration
const data2 = {'name':name, 'age':age, 'job':job};
console.log(data1);
console.log(data2);

//2.6.2 spread ...
const a = (b, ...rest) =>{
    console.log(rest); // rest : 첫번째 매개변수를 제외한 매개변수들의 배열
}
a(1,2,3);

const b = [1,2,3];
const a2 = (a,b,c) => console.log(a,b,c); //배열 분해
a2(...b);

const a3 = [1,2,3,4,5];
const [head, ...rest] = a3;
console.log(head, rest); //배열을 나누기

const c = [1,2,3];
const d = [4,5,6];
const e = [...c, ...d]; // 배열 통합
console.log(e);

const ar = [1,2,3,4];
console.log(Math.max(...ar)); // Math.max 안에 배열을 넣는 방법
console.log(Math.max(1,2,3,4));

const f = {'name':'brian', 'age':26};
const g = {...f, 'key':123}; // 객체 복사 - 객체 깊이가 1단계인 경우에 한해 가능
console.log(f, g);

//2.6.3 구조분해 할당
let aa = 1;
let bb = 2;
[aa, bb] = [bb, aa]; // swap
console.log(aa, bb);

const dd = () => [1,2,3,4];
const [ee,ff,gg] = dd(); // 왼쪽부터 차근차근 받음
console.log(ee,ff,gg);

const make_ob = () => {
    return {'name1':'brian', 'job1':'developer'};
}

const ar2 = [1,2];
const [num1, num2] = ar2;
console.log(num1, num2);

const {name1, job1} = make_ob();
console.log(name1, job1);