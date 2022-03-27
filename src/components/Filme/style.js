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

export const DivSessao = styled.div`
  width: 375px;
  height: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    line-height: 23.44px;
    letter-spacing: 2%;
    color: #293845;
  }
`;

export const Horarios = styled.div`
  width: 375px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

export const DivHorario = styled.div`
  width: 83px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8833a;
  margin: 0px 8px;

  h1 {
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 21.06px;
    letter-spacing: 2%;
    text-align: center;
    color: #ffffff;
  }
`;

export const Footer = styled.footer`
   width: 100%;
   height: 117px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #DFE6ED;
   border: solid 1px #9EADBA
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   z-index: 1;

   img{
      width: 64px;
      height: 89px;
      border-radius: 2px;
      margin: 0px 15px;
   }

   p{
      font-size: 26px;
      font-weight: 400;
      font-style: normal;
      line-height: 30.47px;
      color: #293845;
   }

`;
