### 2. memo

`memo` lets you skip re-rendering a component when its props are unchanged.

```react
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

> 리액트 memo는 Memoized하는 도구이다. 

⭐ 불필요하게 렌더링이 일어나는 경우, 이런 동작을 하지 않기 위해 Memoization을 해주겠다 = memo

* Skipping re-rendering when props are unchanged
* Updating a memozied component using state
* Minimizing props changes

: 부모 컴포넌트에서 자식 컴포넌트로 props를 내려줄때 props가 바뀌지 않으면 re-rendering을 시켜주지 않는다. 

 

##### 🤔 왜 모든 컴포넌트에 memo() 적용 안하는가?

* memo() 는 컴포넌트 함수 실행 전화 후의 snapshot을 각각 찍어서 React DOM에 저장
* 둘을 비교해서 변화가 있으면 Real DOM 업데이트 
* 없으면 업데이트 하지 않음
* 이 연산을 하는데 비용이 발생한다. 



##### 🤔 props 그대로인데 왜 re-render 일어나는가 

* Props값이 그대로인데 re-rendering이 발생되는 경우가 있다. 
* Re-rendering 시 함수를 props로 전달하는 경우 
  * 매번 재생성이 되는 새로운 함수
  * 그 함수가 하는 일이 같을 뿐이다. 



---



* memo() 를 통해 re-rendering 최적화를 시켜줄 수 있다. 
* memo()는 props 바뀌기 전, 후 snapshot을 기억해야 해서 연산 필요
* props가 그대로인 것처럼 보여도 새롭게 함수가 생성되어 re-rendering이 도는 경우가 있다. 
