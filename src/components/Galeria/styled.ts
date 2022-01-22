import styled from 'styled-components';
interface fundoProps {
    fundo : string
}

export const ContainerLista = styled.ul`
    width: 47.5625rem;
    height: 850px;
    flex: 1;
    overflow: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-padding: 10px;
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