import styled from 'styled-components';
interface fundoProps {
    fundo : string
}

export const DestaqueContainer = styled.section`
    margin-top: 7.125rem;
    ul{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-row: auto auto;
        grid-template-areas: 
        "destaque normal"
        "destaque normal"
        
        ;
        
        
    }
    @media (max-width: 1148px) {
    &{
      
        margin-top: 0;
    }
    
  }
  @media (max-width: 500px) {
        ul{display: block;}
    }
        
`;
export const DestaqueTitle = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.75rem;
    color: #FEFBFB;
`;
export const DestaqueText = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #C4C4C4;
    font-size: 1.25rem;
    line-height: 2rem;
    margin-top: 0.3125rem;

    margin-bottom: 5rem;
`;

export const DestaqueCardFilme = styled.li<fundoProps>`
    background-image:url(${(props) => props.fundo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 47.5625rem;
    height: 21.875rem;
    padding: 0 1.875rem;
    box-sizing: border-box;
    position: relative;
    grid-area: 'destaque';
    transition: .3s;
    z-index: 1;
    cursor: pointer;
    @media (max-width: 1148px) {
    &{
        width: 47.4rem;
        height: 20rem;
    }
    
  }
  @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 20px;
    }
        
    &:hover{
        box-shadow: inset 0 0 1em gold, 0 0 1em red;

    }
    span{
        padding: 0.25rem 1.125rem;
        box-sizing: border-box;
        position: absolute;
        margin-top: 0.9375rem ;
        background-color: #8257E6;
        width: 5rem;
        height: 1.5625rem;
        border-radius: 0.1875rem;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: #FEFBFB;
    }
    p{
       position: absolute;
       bottom: 0;
       margin-bottom: 0.9375rem;
       font-family: 'Lexend Deca', sans-serif;
       font-size: 1.5rem;
       font-weight: 400;
       color: #FEFBFB;
       line-height: 2.125rem;
       text-align: left;

    

    }
`;
export const CardFilme = styled.li<fundoProps>`
    background-image:url(${(props) => props.fundo});
    background-repeat: no-repeat;
    background-size: cover;
    width: 21.125rem;
    height: 10.3125rem;
    padding: 0 1.25rem;
    box-sizing: border-box;
    position: relative;
    grid-area: 'normal';
    margin-bottom: 1.25rem;
    cursor: pointer;
    transition: .3s;
    @media (max-width: 1148px) {
        &{
            width: 19rem;
            height: 9.4rem;
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
    @media (max-width: 500px) {
        display: none;
    }
        
`;

