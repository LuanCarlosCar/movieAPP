import styled from 'styled-components';
export const ContainerHeader = styled.header`
    width: 70rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.9375rem;
`
export const ContainerLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

 
    li:nth-last-child(n+3){
        margin-right: 3.75rem;

    }
    li:last-child{
        margin-right:0;
        margin-left: 5.25rem;
    }
    li:first-child{
        a{
            color: #FEFBFB;
            border-bottom: 0.125rem solid #8257E6;
            box-sizing: border-box;

        }
    }
`;
export const ItemLink = styled.a`
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #c4c4c4;
    transition: .3s;
    cursor: pointer;
    &:hover{
        color: #FEFBFB;
    }
`;
export const ItemLinkDestaque = styled.a`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #FEFBFB;
    border: 0.125rem solid #8257E6;
    box-sizing: border-box;
    padding: 0.3125rem 1.25rem;
    border-radius: 1.875rem;
    cursor: pointer;
    transition: .2s;
    &:hover{
        background-color: #8257E6;

    }
`;
