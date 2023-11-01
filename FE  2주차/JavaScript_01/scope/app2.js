// 호이스팅
'strict mode'

// (1) 변수 선언

console.log(me); // 에러 발생 no
console.log(job); // 에러 발생 yes => RefernceError


var me = 'susu';
let job = 'engineer'
const year = 1997;

// (2) 함수 선언

// console.log(addExpr(2,3)); ReferenceError
// console.log(addArrow(2,3)); ReferenceError

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b; 
