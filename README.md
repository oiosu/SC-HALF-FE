##### [🟢 SuperCoding-HALF/FE](https://github.com/oiosu/SC-HALF-FE)

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
#### [🤔 What is React](https://github.com/oiosu/SC-HALF-FE/blob/main/FE%20%201%EC%A3%BC%EC%B0%A8/JavaScript_Note/1_%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%9E%80%20%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80.md)
> 사용자 인터페이스를 만들기위한 자바스크립트 라이브러리 

* 3 features of React

| 선언형                    | 컴포넌트 기반            | Virtual DOM              |
| ------------------------- | ------------------------ | ------------------------ |
| 필요한 컴포넌트만 렌더링  | 컴포넌트에서 상태를 관리 | 실제 DOM과 동일          |
| 예측 가능하고 디버깅 용이 | 재사용해서 생산성 향성   | 리플로우/리페인트 최소화 |

> * 리액트는 선언형 프로그래밍을 선호한다. (선언형의 반대말은 명령형)
> * 프로젝트 유지보수하기가 용이하다.

* 명령형과 선언형

| 명령형                     | 선언형                   |
| -------------------------- | ------------------------ |
| 어떻게 how 에 집중         | 무엇 what에 집중         |
| 하나씩 명령을 해 주는 방식 | 컴포넌트에서 상태를 관리 |
| 매번 바퀴를 만듦           | 재사용해서 생산성 향상   |
| 추상화 수준이 낮음         | 추상화 수준이 높음       |
| Vanilla JS, jQuery         | React, Vue               |


#### 🌳 Chapter 1. JavaScript

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
const 함수명 = () => {\
	구현 로직 
}
```


