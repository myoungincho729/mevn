//Promise를 사용한 예 
/*
const a = (c = 'naver') =>{
    return new Promise(
        (resolve, reject)=>{
            //비동기 함수로직
            setTimeout(()=>{
                resolve(`${c}cccc`);
            }, 1000)
        }
    )
}
a().then(ret => {
    console.log(ret);
    return a('kakao');
}).then(ret => {
    console.log(ret);
})*/

const b = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000;
        console.log(delay);
        setTimeout(() => {
            console.log(1);
            resolve(1);
        }, delay)
    })
}
const c = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000;
        console.log(delay);
        setTimeout(() => {
            console.log(2);
            resolve(2);
        }, delay)
    })
}
const d = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000;
        console.log(delay);
        setTimeout(() => {
            console.log(3);
            resolve(3);
        }, delay)
    })
}
//b().then(ret => c()).then(ret => d());
const main = async() => {
    await b();
    await c();
    await d();
}
main();