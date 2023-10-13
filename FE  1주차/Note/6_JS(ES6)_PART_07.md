### 6_JS(ES6)_PART_07

> * 스코프 
> * 스코프 체인
> * 호이스팅



##### 1. 스코프 

: 어떤 변수가 선언된 공간 또는 환경 

: 어떤 변수의 스코프는 해당 변수가 **접근 될 수 있는 범위**

```javascript
// 기본 코드 

// strict mode 를 작성하는 이유 
// : 자바스크립트가 원칙대로 맞음, 틀림을 엄격하게 판단을 원한다면
// strict mode 라는 키워드를 넣어서 사용한다 
// (자주 사용하지 않지만 실습을 위해)

'strict mode'

function calcAge(birthYear) {
    const age = 2025 - birthYear;
    return age;
}

const firstName = 'su';
console.log(calcAge(1990));
```





