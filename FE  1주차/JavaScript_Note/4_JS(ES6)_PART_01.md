### 4_JS(ES6)_PART_01

> * 값과 변수
> * 데이터 타입



#### 1. 값과 변수 

* 값 : 데이터 조각의 단위 (🍎사과)
* 변수 : 값을 저장하는 공간 (🍎🍎🍎🍎사과박스)

```javascript
//VALUE
console.log(10);
console.log("su kyung");

//variable
let firstName = "Tomas";
firstName = "Alex";
console.log(firstName);

```



##### ◾ 변수명과 관련된 컨벤션 

> * 숫자나 특수문자로 처음 시작하지 않는다. 
> * camelCase 또는 snake_case 방식을 사용한다. 
> * 검색 : javascript variable coding convention
>
> https://www.w3schools.com/js/js_conventions.asp



#### 2. 데이터 타입 

* 자바스크립트의 타입은 원시 타입과 객체 타입으로 나뉜다. 

* 원시 타입의 종류는 7가지로 다음과 같다. 

  > Number, String, Boolean, Undefined, Null, Symbol, BigInt



##### (1) *number : (정수 ~ 소수까지)*

```javascript
console.log(29);
let name1 = 23;
console.log(name1);
// 변수 또는 값의 타입을 알고 싶다면?
console.log(typeof name);

```



##### (2) *string*

```javascript
console.log("SU");
let name2 = "JOY";
console.log(name2);
```



##### ◾ *template literal*

```javascript
// 자주 사용하는 문법 : template literal
// 자바스크립트 최신 문법
let myName = "Kim";
let templateLiteral = `hello ${myName}`;
console.log(templateLiteral);
```



##### (3) *boolean (0, 1, true, false)*

```javascript
console.log(true);
let isFun = true;
console.log(isFun);
console.log(typeof isFun);
```



##### (4) **undefined : 값이 정의 되지 않음**

```javascript
let apple;
console.log(apple); // undefined
console.log(typeof apple); // undefined
```



##### (5) *null : 값이 없다.*

```javascript
let time = null;
console.log(time); // null
console.log(typeof time); //object
```



##### (6) *symbol (ES6 = ES2015)*

```javascript
// 클래스와 같이 안에 은닉화 하기 위해 만들어진 타입
// 거의 쓸일이 없지만 마주할 수 도 있기 때문에 알고는 있기
let symbol = Symbol();
console.log(symbol); //string 티입이 아님
console.log(typeof symbol);
```



##### (7) **bigint (ES2020)**

```javascript
let theBiggestInt = 3482973847927934n;
console.log(theBiggestInt);
console.log(12345);
console.log(typeof theBiggestInt);
console.log(typeof 12345);
```



---



#### 3. 자바스크립트 동적 타이핑 (dynamic typing)

> * 일반적인 언어는 변수를 선언할 때 타입을 선언해 주어야 한다. 
> * 자바스크립트는 따로 선언해 줄 필요가 없고 변수의 값이 바뀜에 따라 자동적으로 바뀐다. 

```javascript
let variableName  = 123.45;
//type : Number
```

```javascript
variableName = 'hello';
//type : String
```



---



#### ◾Summary

> * 자바스크립트의 값은 데이터 단위이고, 변수는 값을 저장하는 공간
> * 자바스크립트의 데이터 타입은 원시 타입과 객체 타입 
> * 원시 타입의 종류는 7가지 
> * 자바스크립트 동적 타이핑을 지원 



