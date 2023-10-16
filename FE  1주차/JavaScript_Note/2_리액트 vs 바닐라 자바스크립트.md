## 2_리액트 vs 바닐라 자바스크립트 

* ##### 바닐라 자바스크립트 코드 

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Just JavaScript</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>

<body>
  <h1>Todo List (Vanilla JavaScript)</h1>
  <div class="card">
    <h2>리액트 배우기</h2>
    <div class="actions">
      <button class="btn">삭제하기</button>
    </div>
  </div>
</body>

</html>
```

```javascript
const button = document.querySelector("button");

let modal;
let backdrop;

// 버튼 클릭 이벤트 실행 시 어떤 함수를 실행시킬지
button.addEventListener("click", showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
  modalText.textContent = "Are you sure?";

  const modalCancelAction = document.createElement("button");
  modalCancelAction.textContent = "Cancel";
  modalCancelAction.className = "btn btn--alt";
  modalCancelAction.addEventListener("click", closeModalHandler);

  const modalConfirmAction = document.createElement("button");
  modalConfirmAction.textContent = "Confirm";
  modalConfirmAction.className = "btn";
  modalConfirmAction.addEventListener("click", closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}

```



* ##### 리액트 코드

```react
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

> `ReactDOM.createRoot(document.getElementById('root'));`
>
> ReactDOM 이라는 객체에서 `root` 라는 아이디를 가진 요소를 만들어 주는 dom
>
> `root.render(<App />);`
>
> root에 App 이라는 컴포넌트 생성 

```react
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>Todo List (React)</h1>
      <Todo text='리액트 배우기' />
    </div>
  );
}

export default App;

```



#### ◾명령형과 선언형

| 명령형                     | 선언형                   |
| -------------------------- | ------------------------ |
| 어떻게 how 에 집중         | 무엇 what에 집중         |
| 하나씩 명령을 해 주는 방식 | 컴포넌트에서 상태를 관리 |
| 매번 바퀴를 만듦           | 재사용해서 생산성 향상   |
| 추상화 수준이 낮음         | 추상화 수준이 높음       |
| Vanilla JS, jQuery         | React, Vue               |

