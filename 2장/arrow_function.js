//2.2.1 arrow function
const a = () => 2;
//before
function b() {
    return 1;
}
console.log(a());

//2.2.2 basic arguments
const c = (b = 2) => {
    return b;
}
console.log(c()); // 기본 매개변수를 설정할 수 있음

function arrow(){
    setTimeout(
        () => {
            console.log(this); // 화살표함수 안에서의 this는 생성자함수(arrow)를 가리킴
        },
        1000
    )
}

function not_arrow(){
    setTimeout(
        function(){
            console.log(this); // node js 에서는 Timeout을 가리킴
        },
        1000
    )
}
const p1 = new arrow();
const p2 = new not_arrow();