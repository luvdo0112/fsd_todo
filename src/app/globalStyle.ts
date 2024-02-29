import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        border:0;
    }

    html{
        font-size:62.5%;
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-style: normal;
    }

    body{
        display: flex;
        justify-content: center;

        background-color: #E1E0F2;
    }

    body > div{
        max-width:37.5rem;
        width: 100%;
        height:100vh;

        background-color: #fff;
    }

    button{
        background-color: transparent;
        font-family: inherit;
        font-style: inherit;
    }
`;

export default GlobalStyle;
