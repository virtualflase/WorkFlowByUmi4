import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const globaltheme: DefaultTheme = {
    conCurrentColor: '#718dff',
    conditionColor: '#15bc83',
    primaryColor: '#1890FF',
};

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    p,
    ul,
    ol,
    li,
    dl,
    dt,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    form,
    fieldset,
    legend,
    input,
    select,
    textarea,
    button,
    th,
    td,
    blockquote,
    address,
    var,
    pre,
    h5,
    p,
    li,
    ul {
        padding: 0;
        margin: 0;
    }

    body {
        color: #333;
        font: 14px/1.5 'Helvetica', 'PingFang SC', 'HanHei SC', 'STHeitiSC-Light', 'Microsoft YaHei', 'SimSun', 'Arial',
            sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    textarea,
    select,
    button,
    label {
        font-size: 100%;
    }

    button,
    select,
    textarea,
    input {
        color: #444;
        vertical-align: middle;
    }

    input,
    select,
    textarea {
        font-family: 'Helvetica', 'PingFang SC', 'HanHei SC', 'STHeitiSC-Light', 'Microsoft YaHei', 'SimSun', 'Arial',
            sans-serif;
    }

    input {
        outline: none;
    }

    input[type='button'],
    input[type='submit'],
    input[type='reset'],
    input[type='file'],
    button {
        cursor: pointer;
        overflow: visible;
        width: auto;
    };
    ::-webkit-scrollbar {
     width: 2px;
     height: 2px;
      background-color: #f8f8f8;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      background-color: #f8f8f8;
    }
`;
