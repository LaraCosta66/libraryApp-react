import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
 h2 {
    color: #363f5f;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #969CB3;
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: #656AF7;
    color: #fff;
    border-radius: 0%.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }


`
export const ReadboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 1rem  ;
  padding: 0.15rem;
`
interface ContentBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
  }
  const colors = {
    green: "#33CC95",
    red: "#E52E4D",
  };
  
export const ContentBox = styled.button<ContentBoxProps>`
 display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.5rem;
  font-weight: 600;
  background: ${(props) =>
    props.isActive
      ?   transparentize(0.3, colors[props.activeColor])
      : "transparent"};
 
  transition: border-color(0.2s);
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  `