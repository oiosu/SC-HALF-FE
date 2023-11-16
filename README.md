### [🟢 SuperCoding-HALF/FE](https://github.com/oiosu/SC-HALF-FE)

```bash
$ git clone {{repository_url}}
```

```bash
$ cd {{repository_name}}
```

```bash
$ git checkout {{branch_name}}
```

---
### [🤔 What is React](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/1_%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%9E%80%20%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80.md)
> 사용자 인터페이스를 만들기위한 자바스크립트 라이브러리 

* 3 features of React

| 선언형                    | 컴포넌트 기반            | Virtual DOM              |
| ------------------------- | ------------------------ | ------------------------ |
| 필요한 컴포넌트만 렌더링  | 컴포넌트에서 상태를 관리 | 실제 DOM과 동일          |
| 예측 가능하고 디버깅 용이 | 재사용해서 생산성 향성   | 리플로우/리페인트 최소화 |

> * 리액트는 선언형 프로그래밍을 선호한다. (선언형의 반대말은 명령형)
> * 프로젝트 유지보수하기가 용이하다.

* 명령형과 선언형

> -- 명령형 : how에 집중, 하나씩 명령해주는 방식, 매전 바퀴를 만듦, 추상화 수준이 낮음, `Vanilla JS, jQuery ` <br/>
> -- 선언형 : what에 집중, 컴포넌트 상태를 관리, 재사용으로 생산성 향상, 추상화 수준이 높음, `React, Vue`

---

### 🌳 Chapter 1. JavaScript


#### [(1) Values, variables, and data types ](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/4_JS(ES6)_PART_01.md)

* 값 : 데이터 조각의 단위 (🍎사과)
* 변수 : 값을 저장하는 공간 (🍎🍎🍎🍎사과박스)
* 자바스크립트의 타입은 원시 타입과 객체 타입으로 나뉜다.
* 원시 타입의 종류는 7가지
> Number, String, Boolean, Undefined, Null, Symbol, BigInt
* 자바스크립트 동적 타이핑 (dynamic typing)
> -- 일반적인 언어는 변수를 선언할 때 타입을 선언해 주어야 한다. <br/>
> -- 자바스크립트는 따로 선언해 줄 필요가 없고 변수의 값이 바뀜에 따라 자동적으로 바뀐다. 

#### [(2) Three ways to declare variables](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/5_JS(ES6)_PART_02.md)

* 변수를 선언하는 방법에는 let, const, var 가 있고 const를 권장
* 연산자의 종류 5가지 <br/>

[1] 할당연산자 (Assignment Operators) <br/>
>  타입 변환과 타입 강제 : 자신의 타입을 버리고 다른 타입으로 변환 <br/>

[2] 비교연산자 (Comparison Operators) <br/>
> `==`  : 단순하게 값이 같은지에 집중을 한다 (타입 신경x) / 
> `===` : 값과 타입이 모두 같아야 한다 (타입 신경 o)

◼ Truthy vs Falsy 

| Truthy                  | Falsy                    |
| ----------------------- | ------------------------ |
| Boolean에서 true로 인식 | Boolean에서 false로 인식 |
| Falsy한 값을 빼고 전부  | false                    |
| "0"                     | 0, 0n                    |
| "false"                 | ' ', " "                 |
| [ ] / { }               | Null / undefined / Nan   |

[3] 산술연산자 (Arithmetic Operators)

[4] 논리연산자 (Logical Operator) : &&, ||

[5] 삼항연산자 (Conditional Operator) 

#### [(3) Functions, function declarations and function expressions ](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_03.md)

* Functions <br/>: 함수는 입력과 출력이 존재하는 로직의 단위 <br/> :자신의 외부 코드가 호출할 수 있는 하위 프로그램 (재사용)  <br/>

◼ 함수 표현식 : 호이스팅 영향을 받지 않음, 클로저/콜백 사용가능 
```javascript
const 함수명 = function( ) {
  구현로직
}
```
> : 함수를 만들기도 전에 호출이 된다면 예상하지도 못한 결과물이 만들어 질 수 도 있기 때문에 함수 표현식을 권장한다.

◼ 화살표 함수 
: ES6 버전에서 추가된 함수의 형태로 간결하기 때문에 사용을 권장한다. 
```javascript
const 함수명 = () => {
	구현 로직 
}
```

#### [(4) Arrays, Objects, Methods](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_04.md)

[1] Array
> 배열은 리스트와 비슷한 객체로서 순회와 변형 작업을 수행하는 메서드를 갖는다. <br/>
> 배열은 요소 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용한다.
```bash
키(key)를 가지고 있지 않다.
순서를 고려한다.
인덱스로 값을 참조한다.
const newArray = [1, 2, 3];
```

* `map` What if you want to calculate your age? 
```javascript
const birthYearArray = [1990, 1992, 1994];
const ageArray = birthYearArray.map(
    birthYearArray => 2023 - birthYearArray
);
console.log(ageArray);
```
> birthYearArray 출생년도 배열에서 나이를 구하는 공식은 동일하기에, 배열의 그 값을 같은 함수로 로직으로 처리하여 return을 하고 싶다면 map 을 사용하면 된다. 순서대로 각각의 배열들의 원소들을 공식에 적용하여 처리한다.

* Frequently used methods
> * add element : `push`, `unshift`
> * remove element : `pop`, `shift`
> * get index : `indexOf`, `lastIndexOf`
> * is contain : `includes`
> * concatenate multiple arrays : `const combineArray = [...array1, ...array2];`

[2] Object
> 키 값을 기본적으로 가진다. 다양한 키 모듬 및 더 복잡한 엔티티들을 저장하는데 사용된다. <br/>
> 객체는 object() 생성자 또는 객체 초기자/리터럴 구문을 통해 생성할 수 있다.
```bash
키(key)를 가지고 있다.
순서를 고려하지 않는다. 
키로 값을 참조한다.
const newObject = {a : 1, b : 2};
```

#### [(5) Compiler, interpreter and JIT compiler](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_05.md)

##### ◼ Features of the JavaScript language
> * 하이레벨 언어 : 운영체제에 가까울 수록 로우레벨, 어플리케이션에 가까울수록 하이레벨이라고 한다, 메모리 자동관리, 성능 낮음 <br/>
> * 인터프리터 언어 : 자바스크립트는 인터프리터 언어, 컴파일이 필요없음 <br/>
> * 가바지 콜렉션 : 사용하지 않는 객체를 자동으로 제거 <br/>
> * 멀티 패러다임 : 자바스크립트는 전부 가능 (절차지향, 객체지향, 함수형 프로그래밍) <br/>
> * 프로토타입 기반 : 자바스크립트에 있는 건 거의 다 객체(원시 타입 제외) `Array.prototype.push ` <br/>
> * 일급 함수 : 함수를 변수처럼 처리, 함수를 다른 함수 안으로 처리 가능, 함수에 함수로 반환 가능 <br/>
> * 동적 : 변수에 데이터타입 할당하지 않음, 런타임에서 타입을 알 수 없음 <br/>
> * 싱글 쓰레드 : 동시성 모델(자바스크립트 엔진이 여러 태스크 동시 처리), 하나의 쓰레드는 하나의 일만 함 <br/>
> * 논 블로킹 : 이벤트 루프를 통해 오래 걸리는 작업. (데이터 패칭 등) 은 백그라운드 실행 <br/>


##### ◼ Compiler, Interpreter
: 대부분의 언어는 컴파일러로 처리를 한다. 컴퓨터가 코드를 이해하는 것은 `0` 과 `1` 머신코드이다. <br/>
이러한 머신코드인 `0`과 `1` 로 전환해주는 과정을 컴파일러 라고 한다. (소스코드 =======> 머신코드) <br/>
: 머신코드를 기반으로 처리를 하여 프로그램을 실행한다 <br/>
: 컴파일러와 인터프리터의 큰 차이점 ) 머신코드 처리과정이 없는 것 (하지만 인터프리터에서 머신코드가 없는 것은 아니다) 다만, 
  인터프리터는 소스 코드를 한줄 한줄 씩 실행ㅎ을 하면서 바로 처리한다. 

<br/>
* Compiler <br/>

![image](https://github.com/oiosu/SC-HALF-FE/assets/99783474/9c8f1af5-7f5e-4bb9-9164-aa02e1291cc2) <br/>
<br/>

* Interpreter <br/>

![image](https://github.com/oiosu/SC-HALF-FE/assets/99783474/9a7ff650-5cfd-47cd-98b2-bf115208d411) <br/>


◼ JIT(Just-In-Time) compiler

![image](https://github.com/oiosu/SC-HALF-FE/assets/99783474/9d092328-2c0d-46b5-bedd-e8a360c09075)

> JIT 컴파일러에서는 컴파일을 한 후 머신코드를 바로 실행한다. 그리고 실행이 되고 나서 `최적화` 과정을 거친다.  <br/>
> 최적화를 거칠때마다 이 엔진은 자바스크립트 코드를 향상시키는 방향으로 진화를 하게 된다.  <br/>


#### [(6) JavaScript engine, runtime, execution context, call stack](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_06.md)

* JavaScript engine : 자바스크립트 코드를 실행하는 코드 (V8 엔진 => Node.js / Chrome)
* JavaScript 내부 (콜스택, 힙)
* 자바스크립트 런타임 (1) 브라우저 <br/>
  : 브라우저 런타임에 web api 랑 콜백 큐 라는 요소가 있고, 콜백 큐에서 콜백 함수를 빼낼때는이벤트 루프를 통해서 빼낸다
* 자바스크립트 런타임 (2) Node.js <br/>
  : 브라우저와 차이점은, 브라우저는 web api 이지만 node.js는 c++바인딩&쓰레드 풀이다.
<br/>
⭐ 실행 컨텍스트 : 자바스크립트가 실행되는 환경 <br/>
`app.js` 파일을 실행했을 때 가장 먼저 생성이 되는 것은 전역 실행 컨텍스트 이다. 이 파일은 모든 자바스크립트 파일에 예외없이 실행이된다(전역이기 때문)


#### [(7) Scopes, scope chains, hoisting](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_07.md)

* Scope : 어떤 변수가 선언된 공간 또는 환경, 어떤 변수의 스코프는 해당 변수가 접근 될 수 있는 범위
> 글로벌, 함수, 블록 스코프

* Scope chains
> `isAdult` 는 secondFunc 스코프에서 참조 가능
> `decade`는 secondFunc 스코픝에서 참조 불가능


#### [(8-(1)) this, call, apply, bind](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_08%20(1).md)
#### [(8-(2)) this, call, apply, bind](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_08%20(1).md)

* this : 모든 실행 컨텍스트에 만들어지는 특별한 함수(함수가 호출될 때만 값이 할당)
* call : 함수를 호출하는 함수, 첫번째 인자에 this로 세팅하고 싶은 객체를 넘김, 나머지 인자를 입력
* apply : 함수를 호출하는 함수, 첫 번째 인자에 this로 세팅하고 싶은 객체를 넘김, 나머지 인자를 배열로 입력


#### [(9) 원시타입, 객체타입, 얕은복사, 깊은복사](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/blob/main/FE%20%202%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_09.md)

👀 Lodash : A modern JavaScript utilty library delivering modularity, performance & extras.
> 자바스크립트에서 utilty성 모듈, 기능들 등을  Lodash 라는 것을 통해 작업을 하면, 쉽고 빠르게 작업이 가능하다.

#### [(10) 비구조화(Destructuring) 할당, 스프레드(...) 연산자](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/blob/main/FE%20%202%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_10.md)

(1) 비구조화 할당 : 배열의 값을 인덱스로 참조하는 것이 일반적이지만, 다음과 같이 구조를 분해해서 할당 받을 수 있다. 이러한 방법을 비구조화 할당이라고 한다.
```javascript
const arr = [1, 2, 3]
const [x, y, z] = arr;
// 출력값 : 1 2 3 
```

⭐ 협업에서 많이 사용하고 있는 문법 
```javascript
const restaurant = {
    name: 'Super Pizza', 
    location: 'Rome, Italy', 
    startMenus: ['Focaccia', 'Bruschetta', 'Garlic Bread']
    mainMenus: ['Pizza', 'Pasta', 'Risotto'],
    
    order: function(ftarterIndex, mainIndex){
        return [this.startMenus[starterIndex], this.mainMenus[mainIndex]]
    }
}
```
```javascript
const [first, ,third] = restaurant.startMenus;
console.log(first);
console.log(third);
```

* 비구조화 할당 사용해보기
```javascript
const [startMenu, mainMenu] = restaurant.order(1, 2);
console.log(startMenu, mainMenu);
```

* 비구조화 할당 응용(배열안에 배열 원소를 직접 넣어주고 싶다면? )
```javascript
const nested = [2, 4, [5, 6]];
const [i, , [j,k]] = nested;
console.log(i, j ,k);
//출력된 값 : 2, 5, 6
```

(2) 스프레드(...) 연산자 
: `스프레드(...) 연산자`는 이터러블 객체에서만 가능 
🤔 이터러블 : 순회가능한 객체, For----of 반복문 사용이 가능 


| 이터러블 (순회하다, 반복하다) | 이터러블 아님      |
| ----------------------------- | ------------------ |
| 배열, 문자열, Map, Set        | 일반 객체 (Object) |


#### [(11) 객체리터널, 옵셔널 체이닝, map, set](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/blob/main/FE%20%202%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_11.md)

(1) 객체 리터널 (객체를 문자 그대로 표현할 수 있다.) : : ES6 버전에서 객체를 표현하는 방식의 변화 
* 변수명과 객체 프로퍼티 같은 경우 중복 표현 생략
* 객체 메서드 함수 표현식function 키워드 생략
* 오브젝트 프로퍼티 명안에 연산 가능

(2) 옵셔널 체이닝 
*  `undefined`, `null` 에서는 어떤 프로퍼티를 참조할 수 없다. (TypeError) => 이 에러를 방지 하기 위해 만들어진 ES6 문법 옵셔널 체이닝이다.

(3) Map : ES6 에서 추가된 KEY-VALUE 타입의 집합, KEY 는 중복해서 들어갈 수 없다, 이터러블(iterable)_ 순회가능한 구조 
(4) Set : ES6에서 추가된 집합 객체, 순회가 가능하고 값이 중복해서 들어갈 수 없음, 이터러블(iterable)_ 순회가능한 구조 


#### [(12) 일급함수, 고차함수, 클로저](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/blob/main/FE%20%202%EC%A3%BC%EC%B0%A8/JavaScript_Note/6_JS(ES6)_PART_12.md)

---


