### 리액트 심화 (1)_Fragment



##### 1. JSX 의 한계 

: 하나의 JSX안에 두 개 이상의 요소가 있으면 에러를 발생한다. 



##### 2. DIV 로 감쌌을 때 문제점 

: 리스트 렌더링을 해 주어야 하는 경우 KEY 값을 추가해 주어야 한다. 

```react
//child component
return {
    <div>
     	<p>Hello1</p>
        <p>Hello2</p>
    </div>
}

//parent component 
return {
    {list.map{() => 
        <ChildComponent />
	}}
}
```

: DIV가 계속해서 중첩이 될 수 있다. 

```REACT
return {
    <div>
    	<div>
        	<div>
            	<p>Hello1</p>
                <p>Hello2</p>
            </div>
        </div>
    </div>
}
```



##### 3. 해결 방법 : React.Fragment (공식 문서 참고하기)

: Fragment는 리액트에서 제공하는 API이다. 

: 리액트에서 부분적으로 있는 것들을 하나로 묶을때 사용할 수 있는 API

```react
return (
	<React.Fragment>
    	<p>Hello1</p>
         <p>Hello2</p>
    </React.Fragment>
)
```

```react
return (
	<>
    	<p>Hello1</p>
         <p>Hello2</p>
    </>
)
```

: `<Fragment>` , often used via `<>....</>` syntax, lets you group elelments without a wrapper node.

```react
<>
	<OneChile />
	<AnotherChild />
</>
```



---



* JSX 문법에서는 요소를 두 개 이상 리턴할 수 없다. 
* 이문제를 해결하기 위해 REACT FRAGMENT를 사용할 수 있다. 
