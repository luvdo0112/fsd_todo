# FSD 아키텍처를 사용한 TODO

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

```
 - src
    - app
        - providers
        - styles
        - index.scss
        - index.tsx
    - entities
        - model
        - ui
        - index.ts
    - features
    - pages
        - index.tsx
    - shared
        - api
        - config
```

#### app

- providers : 라우터 provider가 위치해있다.
- styles : 공통 스타일 파일들이 위치해있다.
- index.scss : styles 폴더에 위치한 scss파일들을 위한 진입점
- index.tsx : App 컴포넌트 위치

#### entities

- model : api나 비즈니스 로직이 담겨져있다.
- ui : 비즈니스 로직과 관련된 UI 컴포넌트들이 위치해있다.

#### features

- 비즈니스 가치를 전달하는 기능과 관련된 UI들이 포함되어있다.

#### pages

- index.tsx : 페이지 라우팅 로직이 포함되어있다.

#### shared

- api : axios instance를 생성하고 api를 선언해 놓았다.
- config : 재사용가능한 함수나 상수들이 포함되있다.

### 내 구조와 차이점

1. 우선 fsd design의 애플리케이션 진입점은 app폴더 안의 index.tsx파일이다. App.tsx파일을 app폴더안으로 옮겨야 한다.
2. entities의 model폴더에서는 api를 호출하고 비즈니스 로직에 맞게 데이터를 가공한다. ui폴더에는 비즈니스 로직과 관련된 단순히 보여주는 형식의 UI들이 포함되어 있다. 페이지안에서 사용하는 컴포넌트라 생각해서 widgets폴더 안에 포함시킨 나와는 다른 구성이다. 페이지와 상관없이 사용되기 때문일까?
3. features에서는 사용자가 비즈니스 상태를 바꿀수 있도록 만드는 UI가 포함되있다.
4. pages폴더의 index.tsx파일은 라우팅이 선언되있다.

### 배운점

1. 폴더구조는 대규모 애플리케이션에서 빛을 발한다고 생각한다. 이 아키텍처를 사용했을때 강력한점은 아마 표준화되어 있다는점이 아닐까
2. 하지만 아직 몇가지 부분이 애매모호하다. features, entities, widgets 이 폴더들을 확실히 구분할 수 있는 연습이 더 필요할 것 같다.
3. 예전에 폴더구조를 설계할 때 각 도메인 마다 폴더를 따로 나눠서 각 컴포넌트들이 사용되는 곳에 위치하도록 했는데 fsd design같은 경우는 그 부분과 관련해서 어떻게 해결하도록 설계하는지 궁금하다. 더 큰 규모의 애플리케이션 예제를 봐야할 것 같다.

[참고: todo-app](https://github.com/feature-sliced/examples/tree/master/todo-app)
