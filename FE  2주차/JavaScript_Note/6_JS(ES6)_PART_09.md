### 6_JS(ES6)_PART_08 (2)

```js
const profile = {
  firstName: "Kevin",
  year: 1991,
  calcAge: function () {

    // 만약 안에서 함수를 선언해주면 어떻게 될까?
    const isMillenial = () => {
      console.log(this);
    };
    isMillenial();
  },
};
```

> ```javascript
> const isMillenial = () => {
>       console.log(this);
>     };
> ```
>
> `console.log(this);` 의 `this`는 어떤 값을 참조할까?
>
> `profile` 객체를 참조한다. 



----

* ##### 추가 학습 자료 

(1) 함수 호출 방식에 의해 결정되는 this

: https://poiemaweb.com/js-this

(2) [JavaScript] this가 this가 아니라고??

: https://velog.id/@gidskgl6671/Javascript-this

---



#### ◾call, apply, bind

* ##### call 

> : 함수를 호출하는 함수 
>
> : 첫 번째 인자에 this로 세팅하고 싶은 객체를 넘김
>
> : 나머지 인자를 입력 

```javascript
// call
// 인자들을 하나씩 받는지
book.call(asiana, 23, "sara");
```

* ##### apply

> : 함수를 호출하는 함수 
>
> : 첫 번째 인자에 this로 세팅하고 싶은 객체를 넘김 
>
> : 나머지 인자를 배열로 입력 

```javascript
// apply
// 인자들을 배열로 받는지
const flightData = [222, "GID"];
book.apply(asiana, flightData);
```

* ##### bind 

> : 함수를 실행하지 않고 리턴
>
> : 나머지 인자는 call, apply와 

```javascript
// bind
// 조금 더 간편한 방식
const bookASA = book.bind(asiana);
bookASA(66, "Rebecca");
console.log(asiana);
```





```javascript
const koreanAir = {
  airline: "KoreanAir",
  iataCode: "KAL",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name}이 ${this.airline} 항공의 
        ${this.iataCode}${flightNum}예약했습니다.`
    );
  },
};

koreanAir.book(123, "su");
```

> su이 KoreanAir 항공의
>         KAL123예약했습니다.



```javascript
const koreanAir = {
  airline: "KoreanAir",
  iataCode: "KAL",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name}이 ${this.airline} 항공의 
        ${this.iataCode}${flightNum}예약했습니다.`
    );
    // booking이 될때마다 배열에 내역들을 넣어주고 싶다면?
    // this로 내역들을 참조할 수 있다.
    this.booking.push({
      flight: ` ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

koreanAir.book(123, "su");
koreanAir.book(456, "kim");
```

> $ node app8.js
> su이 KoreanAir 항공의
>         KAL123예약했습니다.
> kim이 KoreanAir 항공의
>         KAL456예약했습니다.

---

