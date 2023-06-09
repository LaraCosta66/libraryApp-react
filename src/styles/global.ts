import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    --background:#e5e5e5;
}
*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: var(--background);
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

}
.react-modal-content{
width: 100%;
max-width: 576px;
background:#f0f2f5;
padding: 3rem;
position: relative;
border-radius: 0.24rem;
}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border:0;
    background: transparent;
    
    transition: filter(0.2s);
    &:hover{
        filter: brightness(0.8);
    }
}

`