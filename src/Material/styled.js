import styled from "styled-components";

export const ContainerMenuLateral= styled.div`
    display: none;
    z-index: 99;
    position: relative;
    margin-left:0 ;
    @media (max-width: 500px) {
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            margin-right: 15px;
        }

    }
        
    
`;