### 02_JSX

> * JSX : JavaScript 안에 있는 HTML 코드 
>
> ```react
> function App() {
>     return {
>         <div>
>             <p>This is JSX</p>
>         </div>
>     };
> }
> 
> export default App;
> ```
>
> > [리액트 공식문서]
> >
> > React 에서는 본질적으로 렌더링 로직이 UI로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결된다는 사실을 받아들인다. 
> >
> > 리액트는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신 둘다 포함하는 `컴포넌트` 라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다. 
> >
> > JSX 사용이 필수가 아니지만 대부분의 사람은 JS코드 안에서 UI 관련 작업을 할때 시각적으로 더 도움이 된다고 생각한다. 또한 리액트가 더욱 도움이 되는 에러 및 경고 메시지를 표시할 수 있게 해준다. 



* ##### JSX ==========transform==========> JavaScript

  > Chrome > 개발자 도구 > sources > JS 파일 

  

  ##### 🔻 하나의 컴포넌트에는 반드시 하나의 root element를 리턴해야 한다. 

  * 올바른 코드 

  ```react
  function App(){
      return {
          <div>
              <p>This is p1</p>
              <p>This is p2</p>
              <p>This is p3</p>
          </div>
      };
  }
  export default App;
  ```

  * 잘못된 코드 

  ```react
  function App(){
      return {
          <p>This is p1</p>
          <p>This is p2</p>
          <p>This is p3</p>
      };
  }
  export default App;
  ```

  

  ##### 🔻 포맷팅 단축키 

  * 기본 설정 > 바로 가기 키 > 문서 서식 (Format Document)

  > 단축키를 지정해 놓으면 한 방에 코드를 깔끔하게 정리 가능 

  > `shift` + `alt` + `f`

  

  

  
