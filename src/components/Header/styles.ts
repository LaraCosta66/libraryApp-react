import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
  background-color: #64748b;
  img{
    width: 40px;
    height: 40px;
}
.contact{
  width: 200px;
  font-size: 1.75rem;
  font-weight: 600;
}
`;
export const Content = styled.div`
  width: 100%;
  background-color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  padding: 2rem;

  p {
    background-color: #64748b;
    font-size: 2rem;
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  button {
    display: inline-block;
    border-radius: 10px;
    border: none;
    background: #1875ff;
    color: white;
    text-align: center;
    font-size: 1rem;
    width: 10em;
    padding: 1em;

    transition: filter(0.2s);
    &:hover {
      filter: brightness(0.9);
    }
  }
 
`;
