//2.8.5 제너레이터를 이용한 지연평가
//지연평가 -> 파이프라인에서 제너레이터로 연결된 함수들이 합쳐지는 듯한 효과를 내서 성능 향상에 도움
const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")

const a = [1,2,3,4,5,6,7,8];
const ret = _.go( // _.go : 즉시실행 pipe함수
    a,
    _.map(a => a), // 새로운 배열을 반환, 가공 x
    _.filter(a => a%2), // 홀수인 요소만이 있는 배열 만듦
    _.take(2) // 그중 2개를 추출
)
console.log(ret);

const ret_lazy = _.go( //원소 하나씩 검사 -> map, filter 적용후 홀수라면 take 걸기
    a,
    L.map(a => a),
    L.filter(a => a%2),
    L.take(2)
)
console.log([...ret_lazy]);