import styled from "styled-components";

export const DivCima = styled.div`
    width: 375px;
    height: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;

    h1{
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
      line-height: 28.13px;
      letter-spacing: 4%;
      text-align: center;
      color: #293845;
    }
`

export const Main = styled.main`
   width: 375px;
   height: 810px;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const DivAssentos = styled.div`
   width: 375px;
   height: 215px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;

export const Assento = styled.div`
   width: 25px;
   height: 25px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.habilitado === true ? "#C3CFD9" : "#FBE192"};
   border: solid 1px #808F9D;
   border-radius: 12px;
   margin: 18px 6px;

   p{
   font-size: 12px;
   font-weight: 400;
   font-style: normal;
   line-height: 12.89px;
   letter-spacing: 4%;
   text-align: center;
   color: #000000;
   }
`;

export const DivLegenda = styled.div`
   width: 375px;
   height: 10px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 70px;
`;

export const Selecionado = styled.div`
   width: 25px;
   height: 25px;
   background-color: #8DD7CF;
   border: solid 1px #1AAE9E;
   border-radius: 17px;
`;

export const Disponivel = styled.div`
   width: 25px;
   height: 25px;
   background-color: #C3CFD9;
   border: solid 1px #7B8B99;
   border-radius: 17px;
`;

export const Indisponivel = styled.div`
   width: 25px;
   height: 25px;
   background-color: #FBE192;
   border: solid 1px #F7C52B;
   border-radius: 17px;
`;

export const DivTextos = styled.div`
   width: 375px;
   height: 0px;
   display: flex;
   justify-content: space-around;
   align-items: center;

   p{
      font-size: 13px;
      font-weight: 400;
      font-style: normal;
      line-height: 15.23px;
      letter-spacing: -1.3%;
      color: #4E5A65;
   }
`;

export const DivInputs = styled.div`
   width: 375px;
   height: 160px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   p{
   font-size: 18px;
   font-weight: 400;
   font-style: normal;
   line-height: 21.09px;
   color: #293845;
   }
`;

export const Input = styled.input`
   width: 327px;
   height: 51px;
   padding-left: 15px;
   border: 1px solid #D4D4D4;
   border-radius: 3px;
   margin-bottom: 7px; 
   font-size: 18px;

   &::placeholder {
      color: #AFAFAF;
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
`;

export const Reservar = styled.button`
   width: 225px;
   height: 42px;
   background-color: #E8833A;
   border-radius: 3px;
   font-size: 18px;
   font-weight: 400;
   font-style: normal;
   line-height: 21.09px;
   letter-spacing: 4%;
   text-align: center;
   color: #FFFFFF;
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

   h1{
      font-size: 26px;
      font-weight: 400;
      font-style: normal;
      line-height: 30.47px;
      color: #293845;
   }

   p{
      font-size: 26px;
      font-weight: 400;
      font-style: normal;
      line-height: 30.47px;
      color: #293845;
   }

`;

