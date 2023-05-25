import styled from "styled-components";
import {darken, transparentize} from "polished"
export const Container = styled.div`
background-color: grey;
width: 350px;
height: auto;
padding: 20px;
border-radius: 10px;
border: 1px solid black;


.removeBtn{
width: 100%;
height: 2.5rem ;
color: #FFF;
font-size: 1.20rem;
font-weight: 600;
background: ${transparentize(0.3, "#E52E4D")};
border-radius: 0.25rem;
border: 1px solid #E52E4D;
transition: border-color(0.2s);
&:hover {
    border-color: ${darken(0.1, "#E52E4D")};
  }
}
`
