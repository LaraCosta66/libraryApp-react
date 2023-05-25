import styled from "styled-components";
import { darken, transparentize } from "polished";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.25rem;

  .containerBook {
    width: 350px;
    height: 300px;
    background: #fafafa;
    border: 1px solid #d7d7d7;
    padding: 30px;
    border-radius: 17px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color:  ${darken(0.3, "#d7d7d7")};
      transform: scale(1.05);
    }
    img{
      width: 20px;
      height: 20px;
    }
    .type{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      font-weight: 800;
      font-size: 1rem;
    }
    
  }
  
  .removeBtn {
    width: 100%;
    height: 2.5rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 15px;
    background: ${transparentize(0.3, "#E52E4D")};
    border-radius: 0.25rem;
    border: 1px solid #e52e4d;
    transition: border-color(0.2s);
    &:hover {
      border-color: ${darken(0.1, "#E52E4D")};
    }
  }
`;
