import styled from 'styled-components';
interface fundoProps {
    fundo : string
}


export const ContainerGaleria = styled.section`

`;
export const ContainerGrid = styled.div`
    display: grid;
    grid-template-areas:
    'lista lista2'
    'lista lista2'

     ;
     gap: 20px;
`;
export const ContainerLista = styled.ul`
    grid-area: 'lista';
    width: 47.5625rem;
    height: 850px;
    flex: 1;
    overflow: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-padding: 10px;
    @media (max-width: 1148px) {
    &{
      
        height: 800px;
    }
    
  }
  @media (max-width: 500px) {
      display: none;
  }
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #CCCCCC;
    }
    &::-webkit-scrollbar-button {
        margin: 0;
        height: 0;
        padding: 0;

    }
    &::-webkit-scrollbar-track {
        background: #CCCCCC;
    }
    &::-webkit-scrollbar-track-piece {
        background: #282830;
    }
    &::-webkit-scrollbar-thumb {
        background: #8257E6;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-corner {
        background: #FF0000;
        border-radius: 5px;
    }


`;
export const ContainerConteudo = styled.li`
    display: flex;
    margin-bottom: 35px;
    li:last-child{
        margin-bottom: 0;
    }
    cursor: pointer;
    transition: .3s;
    &:hover{
        box-shadow: inset  0 0 1em red;

    }
  
`;
export const ContainerImg = styled.img<fundoProps>`
    background-image:url(${(props) => props.fundo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 12.5rem;
    height: 9.4375rem;
   
`;
export const ContainerDetalhe= styled.div`
      padding: 5px 18px;
      box-sizing: border-box;
`;
export const TextDetalhe = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #FEFBFB;
    line-height: 20px;
    margin-bottom: 10px;
`;

export const Textdescription= styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    line-height: 16px;
    font-weight: 400;
    color: #C4C4C4;
    margin-bottom: 6px;


`;
export const TextPopularity =styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 10px;
    line-height: 20px;
    color: #C4C4C4;
    margin-bottom: 9px;
    
`;
export const BtnLink = styled.a`
    width: 56px;
    height: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #FEFBFB;
    padding: 3px 22px;
    background-color: #8257E6;
    box-sizing: border-box;
    
`;
export const ContainerSegundaLista = styled.div`
    grid-area: 'lista2';
    @media (max-width: 500px) {
        display: none;
    }

`;
export const CardFilmeGaleria = styled.li<fundoProps>`
    background-image:url(${(props) => props.fundo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 21.75rem;
    height: 15rem;
    padding: 0 1.25rem;
    box-sizing: border-box;
    position: relative;
    grid-area: 'normal';
    margin-bottom: 1.25rem;
    cursor: pointer;
    transition: .3s;
    @media (max-width: 1148px) {
    &{
        width: 17rem;
        height: 12rem;
    }
    
  }
    &:hover{
        box-shadow: inset 0 0 1em gold, 0 0 1em red;

    }
    span{
        padding: 0.125rem 1.125rem;
        box-sizing: border-box;
        position: absolute;
        margin-top: 0.625rem ;
        background-color: #8257E6;
        width: 4.375rem;
        height: 1.25rem;
        border-radius: 0.1875rem;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        color: #FEFBFB;
    }
    p{
       position: absolute;
       bottom: 0;
       margin-bottom: 0.625rem;
       font-family: 'Lexend Deca', sans-serif;
       font-size: 0.8125rem;
       font-weight: 400;
       color: #FEFBFB;
       line-height: 1.25rem;

    }
`;

export const ContainerTitleGaleria = styled.h1`
    font-family:'Lexend Deca', sans-serif;
    font-size: 24px;
    font-weight: 400;
    border-bottom: 3px solid #8257E6;
    padding: 13px 0;
    width: 240px;
    margin-bottom: 20px;
`;

export const CardFilmeGaleria2 = styled.li<fundoProps>`
    background-image:url(${(props) => props.fundo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 350px;
    height: 210px;
    padding: 0 1.25rem;
    box-sizing: border-box;
    position: relative;
    grid-area: 'normal';
    margin-bottom: 1.25rem;
    cursor: pointer;
    transition: .3s;
    &:hover{
        box-shadow: inset 0 0 1em gold, 0 0 1em red;

    }
    span{
        padding: 0.125rem 1.125rem;
        box-sizing: border-box;
        position: absolute;
        margin-top: 0.625rem ;
        background-color: #8257E6;
        width: 4.375rem;
        height: 1.25rem;
        border-radius: 0.1875rem;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        color: #FEFBFB;
    }
    p{
       position: absolute;
       bottom: 0;
       margin-bottom: 0.625rem;
       font-family: 'Lexend Deca', sans-serif;
       font-size: 0.8125rem;
       font-weight: 400;
       color: #FEFBFB;
       line-height: 1.25rem;

    }
`;
export const ContainerGaleria2 = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    @media (max-width: 500px) {
        display: none;
    }
`;
export const ContainerGaleriaMobile = styled.ul`
    display: none;
    @media (max-width: 500px) {
        overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 20px;

  /* visual styling */
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 10px;
  padding-left: 20px;
    }
`;