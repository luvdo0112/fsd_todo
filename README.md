# FSD 아키텍처를 사용한 TODO

### FSD 아키텍처를 사용할 때 생각해야할 2가지

- 레이어는 계층 구조를 가지고 있다.
- 공개 API에서 내부용, 외부용 컴포넌트를 구분한다.

### 내가 구성한 폴더구조

```
- src
    - app
    - pages
        - Todo
    - shared
        - context
    - widgets
```

#### app

애플리케이션 로직이 초기화 되는 곳이므로 globalStyle 파일을 위치시켰다.

#### pages

애플리케이션의 페이지가 위치하는 곳으로 이 프로젝트에서는 페이지가 하나이기 때문에 Todo page를 위치시켰다.

#### shared

재사용 가능한 컴포넌트나 유틸리티가 위치하는 곳이다. 여기서 나는 context provider를 정의하고 getDate라는 재사용 함수 파일을 추가했다.

#### widgets

페이지에 사용되는 독립적인 UI 컴포넌트들이 위치하는곳으로 Todo 페이지에 사용되는 컴포넌트들은 전부 여기에 위치해있다. 공개 API를 생성해서 외부에서만 사용되는 컴포넌트만 export시켰다.

### 공식문서 폴더구조

계층구조로 보기 쉽게 정렬했다.

```
 - src
    - app
        - providers
        - styles
        - index.scss
        - index.tsx
    - pages
        - index.tsx
    - features
    - entities
        - model
        - ui
        - index.ts
    - shared
        - api
        - config
```

#### app

- providers : 라우터 provider가 위치해있다.
- styles : 공통 스타일 파일들이 위치해있다.
- index.scss : styles 폴더에 위치한 scss파일들을 위한 진입점
- index.tsx : App 컴포넌트 위치

#### pages

- index.tsx : 페이지 라우팅 로직이 포함되어있다.

#### features

- 슬라이스로 두개의 컴포넌트가 존재하고 폴더안에는 세그먼트들이 있다. ex) ui, model ..

#### entities

- task라는 슬라이스 안에 model과 ui로 폴더가 나뉘어져있고 model은 api, ui는 features보다 더 작은 단위의 컴포넌트들이 존재하고 있다.

#### shared

- api : axios instance를 생성하고 api를 선언해 놓았다.
- config : 재사용가능한 함수나 상수들이 포함되있다.

### 내 구조와 차이점

1. 우선 fsd design의 애플리케이션 진입점은 app 폴더 안의 index.tsx파일이다. App.tsx파일을 app 폴더 안으로 옮겨야 한다.
2. 계층구조로 레이어가 이루어져 있다는 것을 까먹고 폴더를 구성했다. widgets의 목적은 페이지에서 사용되는 독립적인 UI컴포넌트라 나와있는데 레이어 계층상 페이지를 구성하는 큰 덩어리로 이해하면 쉽다.
3. pages폴더의 index.tsx파일은 라우팅이 선언되있다.

### 느낀 점

1. 폴더구조는 대규모 애플리케이션에서 빛을 발한다고 생각한다. 이 아키텍처를 사용했을 때 강력한 점은 아마 표준화되어 있다는점이 아닐까
2. 아직 몇 가지 부분이 애매모호하다. features, entities, widgets 이 폴더들을 확실히 구분할 수 있는 연습이 더 필요할 것 같다. (eslint의 도움도 받을 수 있다.)

## 3/15 수정

```
 - src
    - app
        - styles
        - index.tsx
    - pages
        - Todo
        - index.tsx
    - widgets
        - Layout
        - DateAndRemainTaskSection
        - TodoListSection
        - index.ts
    - entities
        - todo
            - ui
                -TodoCard
        - index.ts
    - shared
        - context
        - types
        - util
```

[참고: todo-app](https://github.com/feature-sliced/examples/tree/master/todo-app)
