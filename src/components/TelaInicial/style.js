import styled from "styled-components";

export const DivCima = styled.div`
  width: 375px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 67px;

  h1 {
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 28.13px;
    letter-spacing: 4%;
    text-align: center;
    color: #293845;
  }
`;

export const Main = styled.main`
  width: 375px;
  height: 810px;
  display: flex;
  flex-wrap: wrap;
`;

export const DivImagem = styled.div`
  width: 145px;
  height: 209px;
  border-radius: 3px;
  box-shadow: 0 2 4 2 #000000 10%;
  margin: 11px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 129px;
    height: 193px;
  }
`;
