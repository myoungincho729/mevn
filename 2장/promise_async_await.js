//2.7 

/*2.7.1 자바스크립트에서의 비동기

node.js 나 브라우저는 싱글스레드, 논블로킹 성질
동기적 : 일들이 순차적으로 처리되는 것
비동기적 : 순차적 시작하지만 끝나는 순서대로 나오는 것 - 실행 완료시점의 순서가 보장되지 않는 것
*/

//ex1
const job_1 = () => {
    const b = Math.random() * 100;
    setTimeout(
        () => {
            console.log(1);
        job_2()
    },
        b
    )
}
const job_2 = () => {
    const b = Math.random() * 100;
    setTimeout(
        () => {
            console.log(2);
        job_3()
    },
        b
    )
}
const job_3 = () => {
    const b = Math.random() * 100;
    setTimeout(
        () => {console.log(3)},
        b
    )
}
job_1();
//job_2();
//job_3(); // 순차적으로 호출하지만 실행할 때마다 각기 다른 순서로 출력됨 - 비동기적으로 완료되는 순서대로 작동

//ex2
console.log('hi');
setTimeout(function timeout() {
    console.log('async function1 complete');
}, 5000);
setTimeout(function timeout(){
    console.log('async function2 complete');
}, 5000);
console.log('myoungin');
// 함수를 호출하면 콜스택에 쌓이고 공간에 쌓임 -> I/O bound, Timers는 Web APIs의 백그라운드 공간에 쌓여 실행됨
// 콜백큐에 완료된 순서대로 쌓여서 이벤트 루프를 거쳐 다시 콜스택 공간으로 올라가 실행됨
/*
class Queue {
    constructor(){
        this.a = [];
    }
    front() {
        if (this.a.length === 0){
            console.log('queue is empty');
            return ;
        } else {
            return this.a[0];
        }
    }
    enqueue(value){
        this.a.push(value);
    }
    dequeue(){
        if (this.a.length === 0){
            console.log('queue us empty');
            return;
        } else {
            this.a.shift();
        }
    }
}
const q = new Queue();
q.enqueue(11);
q.enqueue(21);
q.enqueue(31);
for (let i=0;i<4;i++){
    console.log(q.front());
    q.dequeue();
}
*/