### 4_JS(ES6)_PART_02

> * let, const, var
> * ⭐연산자



#### 1. 변수를 선언하는 세가지 방법 

| let         | const           | var                |
| ----------- | --------------- | ------------------ |
| ES6 이후    | ES6이후         | ES5 이전           |
| 변수        | 상수(사용 권장) | 변수 (사용 권장 X) |
| 블록 스코프 | 블록 스코프     | 함수 스코프        |



##### (1) let

```js
// 1. let, ES6, block scope
let age = 30;
age = 30;
console.log(age);

let howiswhethertoday;
console.log(howiswhethertoday);
//undefined
howiswhethertoday = 20;
console.log(howiswhethertoday);
```



##### (2) const

```js
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
```



##### (3) var

```js
// 3. var ES5, function scope
var address = "Seoul";
address = "Busan";
```



#### 2. ⭐연산자 

> * 연산을 가능하게 하는 기호 
>
> * 종류가 더 많지만 자주 쓰이는 5가지 
>
>   > 1. 할당 연산자 
>   > 2. 비교 연산자 
>   > 3. 산술 연산자 
>   > 4. 논리 연산자 
>   > 5. 삼항 연산자 

##### (1) 할당연산자 (Assignment Operators)

```javascript
const myAppleCount = 3;
const yourAppleCount = 49;
const totalAppleCount = myAppleCount + yourAppleCount;

let AppleCount = 4;
// 단축 연산자 
AppleCount += 20;
console.log(AppleCount);

appleCount -= 65;

appleCount *= 3;

appleCount /= 3;
console.log(appleCount);
```



##### (2) 비교연산자 (Comparison Operators)

```javascript

```



##### (3) 산술연산자 (Arithmetic Operators)

```javascript

```



##### (4) 논리연산자 (Logical Operator)

```javascript

```



##### (5) 삼항연산자 (Conditional Operator)

```javascript

```

