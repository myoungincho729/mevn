//Promise의 에러처리
//2.7.4 Promise를 사용한 에러핸들링
const a = (c = 'naver') =>{
    return new Promise((resolve, reject)=>{
        throw new Error("[myoungin error]");
        reject(new Error('[myounfin error]'));
        reject('[myoungin error]');
        setTimeout(()=>{
            resolve(`${c} good`)
        }, 1000)
    })
}
a().then(ret=>{
    return a('kakao')
}).then(ret=>{
    console.log(ret);
}).catch(e=>{
    console.log(`${e} wow`)
})

// error handling with then (1)
const async1 = param =>{
    return new Promise((resolve, reject)=>{
        resolve(param * 2);
    })
}
const async2 = param =>{
    return new Promise((resolve, reject)=>{
        //throw '[error!]'
        resolve(param * 2);
    })
}
/*
async1(1).then(async2).then(result => {
    console.log(result);
}, reason =>{
    console.log(`this promise was stopped because of ${reason}`)
})
*/
/*
async1(1).then(async2).then(result => {
    throw 'error!!!!'
    console.log(result);
}, reason =>{
    console.log(`this promise was stopped because of ${reason}`)
}) //UnhandledPromiseRejection : then에서 발생한 에러는 onFulfilled상태에서 발생했기 때문에 
//rejected의 에러가 아님 -> reason으로 잡을 수 없음
*/
async1(1).then(async2).then(res => {
    console.log(res);
    throw '에러';
}).catch(reason => {
    console.log(`이 프라미스는 이 ${reason}으로 종료가 되었습니다.`);
}).finally(()=>{
    console.log(`이 로직은 프라미스 이후에 무조건 실행되는 로직입니다.`);
})
