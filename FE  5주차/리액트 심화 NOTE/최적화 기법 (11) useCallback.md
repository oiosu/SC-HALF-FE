### 3.   ⭐ useCallback



##### ✔ Object 문법 복습

: 오브젝트는 객체의 값을 heap 공간에 저장하고, 그 값을 참조하는 메모리 주소를 콜 스택에 저장한다. 

: 리액트에서 같은 함수라도 컴포넌트 실행 될 때마다 매번 새로 생성이 될 수 가 있다. 



##### 1. useCallback

`useCallback` is a React Hook that lets you cache a function definition between re-renders

```react
const cachedFn = useCallback(fn, dependencies)
```

* cache : 가까이 있는 메모리 공간 (저장한다)

```react
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }, [productId, referrer]);
}
```

> `productId` , `referrer`가 바뀔 때마다 다음 코드가 매번 실행이 될 것이고 
>
> ```react
> orderDetails) => {
>         post('/product/' + productId + '/buy', {
>             referrer,
>             orderDetails,
>         });
> ```



##### 🤔 useCallback 안에 변하는 값이 들어간다면? 

* useCallback도 하나의 클로저 
* 만약에 함수가 생성이 될 때마다 바뀌어야 하는 값이 있다면, 그 변화를 useCallback에서 기억을 해 주어야 한다. 
* 그러한 값들을 dependencies에 넣어주면 된다. 



---



* 같은 기능의 함수를 매번 컴포넌트 리렌더링이 일어날때마다 새롭게 생성해 줄 필요는 없고, 이를 위해 useCallback 훅을 사용할 수 있다. 
* useCallback 안의 콜백 함수에서 값이 외부 의존성이 있는 경우라면, 두 번째 인자로 dependencies를 넣어준다. 
