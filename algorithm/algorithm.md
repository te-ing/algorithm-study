## 📌 목차
- [📚 리스트](#-리스트)
  - [📙 연결리스트](#-연결리스트)

# 📚 리스트

## 📙 연결리스트
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7fc3140e-e4ac-4d03-95b6-c5150c41b5ee/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220109T132923Z&X-Amz-Expires=86400&X-Amz-Signature=878e6089b840ac530e597ea3e7ebbb6b815a972ac4aa3b60ed624158a54c954d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" >

각 요소를 포인터로 연결하여 관리하는 선형 자료구조
각 요소는 노드라고 부르며 데이터 영역과 포인터 영역으로 구성된다.
배열과 반대되는 특징

### 특징
- 메모리가 허용하는 한 요소를 제한없이 추가할 수 있다.
- 탐색은 O(n)이 소요된다. (배열은 요소제거 시 O(n)소요)
- 요소를 추가하거나 제거할 때는 O(1)이 소요된다. (배열은 요소탐색 시 O(1)소요)
- Singly Linked List, Doubly Linked List, Circular Linked List가 존재한다.

### Singly Linked List
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c78badf1-d0c8-4e01-a6bb-233242b2f3dc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220109T133032Z&X-Amz-Expires=86400&X-Amz-Signature=d6f98d3cda5990abf0b183b6a66d9060f3a3058636b7cb45466ae88b32fe1ea2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">
Head에서 Tail까지 단방향으로 이어지는 연결리스트, 가장 단순한 형태인 연결리스트다.

### Doubly Linked List
양방향으로 이어지는 연결리스트. Singly Linked List보다 자료구조의 크기가 조금 더 크다.

### Circular Linked List
Singly 혹은 Doubly Linked List에서 Tail이 Head로 연결되는 연결리스트. 원형 큐 등을 만들때도 사용된다.

---




