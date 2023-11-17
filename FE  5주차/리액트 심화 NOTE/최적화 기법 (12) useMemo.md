### 4. useMemo

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders.

```react
const cachedValue = useMemo(calculateValue, dependencies)
```

Call `useMemo` at the top level of your component to cache a calculation between re-renders: (가장 최상단 호출)

```react
import { useMemo } from 'react';

function TodoList({ todos, tab }){
    const visibleTodos = useMemo(
    	() => filterTodos(todos, tab),
        [todos, tab]
    );
    ///...
}
```

* cache _ 가장 가까운 메모리 공간에 저장한다 (빠르게 가져올 수 있다는 이점을 가지고 있다.)

##### Skipping expensive recalculations 

To cace a calculation between re-renders, wrap it in a `useMeno` call at the top level of your component:



---



* 같은 객체를 매번 컴포넌트 리렌더링이 일어날 때 마다 새롭게 생성해 줄 필요는 없고, 이를 위해 useMemo 훅을 사용할 수 있다. 
* useMemo는 useCallback에 비해서 사용하는 빈도가 적다. 

