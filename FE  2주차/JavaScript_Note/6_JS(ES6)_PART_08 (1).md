### 6_JS(ES6)_PART_08

> * this
> * call, apply, bind



##### ◾ this 

: 모든 실행 컨텍스트에 만들어지는 특별한 변수 

: this는 static 하지 않다. 함수가 호출될 때만 값이 할당

> 개발자 도구 > console 
>
> ```javascript
> console.log(this);
> ```
>
> > `{}` 빈 객체가 출력됨
>
> > 전역 컨텍스트가 만들어지면 전역 컨텍스트에는 전역 스코프와 this가 만들어지는데, 
> >
> > 여기에 this는 빈 객체이다. 
>
> ```js
> const calcAge = function (birthYear) {
>   console.log(this);
> };
> calcAge(1990);
> ```
>
> > ```bash
> > {}
> > <ref *1> Object [global] {
> >   global: [Circular *1],
> >   queueMicrotask: [Function: queueMicrotask],      
> >   clearImmediate: [Function: clearImmediate],      
> >   setImmediate: [Function: setImmediate] {
> >     [Symbol(nodejs.util.promisify.custom)]: [Getter
> > ]
> >   },
> >   structuredClone: [Function: structuredClone],    
> >   clearInterval: [Function: clearInterval],        
> >   clearTimeout: [Function: clearTimeout],
> >   setInterval: [Function: setInterval],
> >   setTimeout: [Function: setTimeout] {
> >     [Symbol(nodejs.util.promisify.custom)]: [Getter
> > ]
> >   },
> >   atob: [Function: atob],
> >   btoa: [Function: btoa],
> >   performance: Performance {
> >     nodeTiming: PerformanceNodeTiming {
> >       name: 'node',
> >       entryType: 'node',
> >       startTime: 0,
> >       duration: 28.19650000007823,
> >       nodeStart: 2.020399999804795,
> >       v8Start: 4.6203000000678,
> >       bootstrapComplete: 19.717999999877065,       
> >       environment: 10.485499999951571,
> >       loopStart: -1,
> >       loopExit: -1,
> >       idleTime: 0
> >     },
> >     timeOrigin: 1698556074714.974
> >   },
> >   fetch: [AsyncFunction: fetch]
> > }
> > 
> > ```
>
> > `console.log(*this*);` 에 찍힌 `this`는 객체이고 이 함수가 실행 컨텍스트 만들어졌을 때 같이 만들어 지면서 굉장히 많은 프로퍼티와 메서드들이 들어가 있는 것을 알 수 있다. 



|                  | this                                                         |
| ---------------- | ------------------------------------------------------------ |
| 메서드           | 메서드를 호출하는 오브젝트                                   |
| 간단한 함수 호출 | Chrome : undefined(*strict mode 기준) / Node.js : global Object |
| 화살표 함수      | 둘러싸고 있는 함수(어휘적 this)                              |
| 이벤트 리스너    | 핸들러가 붙어 있는 DOM 이벤트                                |



> ```js
> const calcAgeArrow = (birthYear) => {
>   console.log(this);
> };
> ```
>
> > `{}` 빈 객체가 출력됨 



> ```javascript
> const profile = {
>   firstName: "Kevin",
>   year: 1991,
>   calcAge: function () {
>     console.log(this);
>   },
> };
> 
> profile.calcAge();
> ```
>
> > `{}
> > { firstName: 'Kevin', year: 1991, calcAge: [Function: calcAge] }`  이 출력됨 
>
> > 메서드를 호출하는 오브젝트 



##### ❌

```js
greet: () => console.log(`안녕, ${this.firstName}야`)
```

⭕

```js
greet2: function(){
    console.log(`안녕, ${this.firstName}야`);
}
```
