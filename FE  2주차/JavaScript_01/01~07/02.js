// 3. 데이터 타입
// primitive

// 1 number : (정수 ~ 소수까지)
console.log(29);
let name1 = 23;
console.log(name1);
// 변수 또는 값의 타입을 알고 싶다면?
console.log(typeof name);

// string
console.log("SU");
let name2 = "JOY";
console.log(name2);

// 자주 사용하는 문법 : template literal
// 자바스크립트 최신 문법
let myName = "Kim";
let templateLiteral = `hello ${myName}`;
console.log(templateLiteral);

// boolean (0, 1, true, false)
console.log(true);
let isFun = true;
console.log(isFun);
console.log(typeof isFun);

// undefined : 값이 정의 되지 않음
let apple;
console.log(apple); // undefined
console.log(typeof apple); // undefined

// null : 값이 없다.
let time = null;
console.log(time); // null
console.log(typeof time); //object

// symbol (ES6 = ES2015)
// 클래스와 같이 안에 은닉화 하기 위해 만들어진 타입
// 거의 쓸일이 없지만 마주할 수 도 있기 때문에 알고는 있기
let symbol = Symbol();
console.log(symbol); //string 티입이 아님
console.log(typeof symbol);

// bigint (ES2020)
let theBiggestInt = 3482973847927934n;
console.log(theBiggestInt);
console.log(12345);
console.log(typeof theBiggestInt);
console.log(typeof 12345);
