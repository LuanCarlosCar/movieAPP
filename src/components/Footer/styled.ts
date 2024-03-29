import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    text-align: center;
    justify-content: center;
    width: 55%;
    margin: auto;
    height: 100px;
  
    p{
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #C4C4C4;
    }
    @media (max-width: 700px) {
        width: 90%;
    }
`;