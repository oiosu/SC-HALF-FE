###  사이드 이펙트 처리 (8) forwardRefs

> * forwardRef (더 공부하기)
> * useImperativeHandle

##### 1. forwardRef (더 공부하기)

```react
const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
        authCtx.onLogin(emailState.value, passwordState.value);
    }else if(!emaiIsValid){
        //이메일 창에 focus
        emailInputRef.current.focus();
    }else{
        //비밀번호 창에 focus
        passwordInputRef.current.focus();
    }
}
```



##### 2. useImperativeHandle (더 공부하기)

`useImperativeHandle` is a React hook that lets you customize the handle exposed as a `ref`

```react
useImperativeHandle(ref, createHandle, dependencies?)
```



---



* `ref` 는 꼭 필요할 때만 사용해야한다. (공식문서)
* forwardRef는 상위 컴포넌트에서 전달 받은 ref를 하위 컴포넌트로 전달 
* 자식 컴포넌트에서 ref를 다루기 위해 useImperativeHandle 훅 사용
* Ref 는 꼭 필요할 때만 사용하자 

