### 4. HTTP요청 _ POST

기본적으로 서버에 데이터를 보낼 때 사용하는 HTTP메서드, 일반적으로 파일 업로드, Form 형태의 제출에서 많이 사용한다. 



#### 1. Post 요청 _ Headers 

* Content-Type : application/x-www-form-urlencoded

```html
POST  /echo/post/form HTTP/1.1
Host : example.com
Content-Type: application/x-www-form-urlencoded

key1=value1&key2=value2
```

`key1=value1&key2=value2` 쿼리 스트링 방식 



* Content-Type : application/json

```html
POST  /echo/post/form HTTP/1.1Type
Host : example.com
Content-Type: application/json

{
	"key1" : "value1",
	"key2" : "value2"
}
```



#### 2. Google Firebase

백엔드 없이 서버리스 API를 만들 수 있는 도구 : Firebase

* 더미 데이터베이스를 만들어서 POST 요청을 보내보기 / 필요한것 : 구글계정 

 (1) Firebase 새 프로젝트 생성 

(2) 새 프로젝트 > 빌드 > Realtime Database

(3) 데이터베이스 설정 > 미국 시간 > 테스트 모드에서 시작 

```react
import React from react;

function App() {
    const postRequestHandler = async() => {
        await fetch('https://react-study-55705-default-rtdb.firebaseio.com/test.json')
        method: 'POST',
        body: JSON.stringify({
            "key1" : "value1",
            "key2" : "value2"
        }),
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    
    return (
        <button onClick={}>Post</button>
    );
}
```



* ##### 벡엔드 개발자와의 협업 꿀팁 

: 데이터 구조를 설계하는 회의에 초대를 해달라고 하거나, 회의가 끝나고 구현 하기 전 먼저 결과를 공유해 달라고 부탁하기 

: 테이블 구조는 기존에 데이터가 쌓인 것들도 있고, 다른 테이블과 관계가 있는 것들도 있어서 한 번 설정하면 이후에 변경하기가 어렵다 (불가능은 아니지만)

: Entity Relationship Diagram

: 데이터 구조가 바뀌면, 기존에 있던 데이터를 싹 다 지우고 새로운 마음으로 시작하기 이 작업을 벡엔드 개발자에게 적극적으로 부탁하기 

: 바뀌기 전과 후과 섞여 있으면 테스트 시에 오류가 나기도 쉽고, 자주 질문을 주고 받아야 해서 생산성이 떨어지기 쉽다.

: 개발환경이 배고가 되었으면 `POSTMAN`이나 `GraphQL playgroound` 같은 API 명세를 볼 수 있는 페이지를 꼭 달라고 요청하기 

: 이런 도구들에 API 작업 사항들을 잘 업데이트 해 놓으면, 매번 백엔드 개발자에게 물어보지 않아도 된다. 



---



* POST요청은 서버로 데이터를 보낼 때 사용하는 HTTP 메서드 이다. 
* POST Headers에 Content-Type은 여러 가지 방식이 가능한데 application/x-www-form-urlencoded와 application/json 두 가지 방식을 많이 사용한다. 
* Google Firebase와 같은 서버리스 API 도구를 통해 백엔드 개발 없이도 데이터 베이스를 만들어서 개발을 할 수 있다. 

