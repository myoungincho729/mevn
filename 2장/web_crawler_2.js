const Nightmare = require('nightmare');
const vo = require('vo');
const nightmare = Nightmare({
    show : true
})
const BASE_URL = 'https://grafolio.naver.com/daahwg';
const GRAPOLIO_URL = `${BASE_URL}`;

function *run(){
    yield nightmare.goto(GRAPOLIO_URL);

    const a = yield nightmare
    .evaluate(() => Array.from(document.querySelectorAll('div')))
    console.log(a);
    yield nightmare.end()
}
vo(run)(() => console.log('스크래핑이 완료되었습니다.'))