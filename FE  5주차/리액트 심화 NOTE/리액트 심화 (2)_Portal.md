###  리액트 심화 (2)_Portal

: 어떤 지정한 컴포넌트를 다른 부분으로 전환하고 싶을 때 사용하는 방법 



##### 1. 모달 코드 살펴보기 

: 모달은 전체 컴포넌트에서 뒤덮일 수 있는 코드 

```react
return (
	<>
    	<Modal />
    	<Form />
    </>
)
```



##### 2. practice 4- 2

```html
<div id="backdrop-root"></div>
<div id="overlay-root"></div>
<div id="root"></div>
```

```react
const Backdrop = (props) => {
	return (
        <div>
            {ReactDOM.createPortal(
            	<Backdrop onConfirm={props.onConfirm} />
                 document.getElementById('backdrop-root')
            )}
            {
                ReactDOM.createPortal(
                  <ModalOverlay
                        title={props.title}
                        message={props.message}
                        onConfirm={props.onConfirm}
             		/>,
                    document.getElementById('overlay-root')
                )
            }
        </div>
    );
};
```



* React `createPortal` 

: `createPortal` lets you render some children into a different part of the DOM

```react
<div>
	<SomeComponent />
    {createPortal(children, domNode, key?)}
</div>
```

> ` key?` 3번째 인자는 옵셔널 하기 때문에 사용하지 않아도 된다. 



---



* 모달과 같은 overlay 컴포넌트는 전체 html 에서 동작하게 해야한다. 
* 컴포넌트의 위치를 옮겨줄 때 React Portal 을 사용한다. 
