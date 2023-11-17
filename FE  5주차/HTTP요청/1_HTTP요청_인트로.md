### 1.  HTTP요청 _인트로

> * Client vs Server 
> * HTTP 요청 내보내기 

##### 1.  Client vs Server 

![image](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/assets/99783474/ba5b735b-e35a-4ef8-b56c-c2826c05a1b2)



#####  2. HTTP (HyperText Transfer Protocol)

![image](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/assets/99783474/ccbf7c89-9bc6-4777-96fd-11298de992c3)


: 웹에서 정보를 주고 받을 수 있는 프로토콜으로, 일반적으로는 HTML 문서를 주고 받는데 사용한다. 

: HTTP는 HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜이다(여기서 말하는 리소스는 일반적으로, HTML문서가 맞지만, 굉장히 다양하다(이미지, 영상, JSON 등))

: HTTP는 웹에서 이루어지는 모든 데이터 교환의 기초이며, 클라이언트-서버 프로토콜이기도 한다. 

: 클라이언트-서버 프로토콜이란 (보통 웹브라우저인) 수신자 측에 의해 요청이 초기화되는 프로토콜을 의미한다. 

: 하나의 완전한 문서는 텍스트, 레이아웃 설명, 이미지, 비디오, 스크립트 등 불러온(fetched) 하위 문서들로 재구성된다. 

: 클라이언트와 서버들은(데이터 스트림과 대조적으로) 개별적인 메시지 교환의 의해 통신한다. 보통 브라우저인 클라이언트에 의해 전송되는 메시지를 요청(requests)이리고 부르며, 그에 대해 서버에서 응답으로 전송되는 메시지를 응답(responses) 이라고 부른다. 



* ##### HTTP요청

![image](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/assets/99783474/1d5b4df4-0eec-44b1-b401-27ae5f460a21)


> * Method _ HTTP를 보내기 위한 방법 (정말 많다) : 주로 사용하는 것은 GET, POST 이다. 
> * PATH _ HTTP를 보내는 경로이다. 
> * HTTP/1.1 _ 우리가 HTTP를 보낼것이고 그 버전은 1.1 이다. 



* HTTP 응답

![image](https://github.com/oiosu/Super-Coding-Front-End-Developer-Course/assets/99783474/5f51e342-85b3-447d-8f58-1a7b56c68a8c)


> * STATUS CODE_ 요청에 대한 응답에 대한 잘 응답이 되었는지 확인 



##### ◼ HTTP 요청을 보내보기 (news api)

https://newsapi.org/



---



* 클라이언트에서 데이터베이스의 데이터를 가져오고 넣기 위해서는 직접 접근하면 안 되고, 가운데 서버를 거쳐서 통신해야 한다. 
* 클라이언트와 서버가 통신하는 프로토콜을 HTTP 라고 한다. 
