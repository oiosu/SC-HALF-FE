// 1. let, ES6, block scope
let age = 30;
age = 30;
console.log(age);

let howiswhethertoday;
console.log(howiswhethertoday);
//undefined
howiswhethertoday = 20;
console.log(howiswhethertoday);

// 2. const ES6
const birthYear = 2009;
// 2-1) birthYear = 2990;
// TypeError: Assignment to constant variable. at Object.<anonymous>
// 타입에러 : 상수화된 변수에 할당이 되었다.
// 상수 : 변하지 않는 값
// 즉, const를 올바른 문법으로 사용하지 않았기 때문에 에러 발생
// 2-2) const defaultBirthYear;
// let은 처음에 값을 할당해도 되고 나중에 할당해도 상관없지만
// const 는 반드시 처음에 어떤 값이 할당이 되어야 한다.
// 또한 2-1 의 설명처럼 그 값을 바꿔 줄 수 없다

// 3. var ES5, function scope
var address = "Seoul";
address = "Busan";

// ** block scope는 구간을 의미하고 function scope는 함수를 의미한다.
