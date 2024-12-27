import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    border: 0;

    width: 100%;
`

export const NoRegisterText = styled.p`
    width: 100%;

    text-align: center;

    margin-top: 20px;
    
    font-size: ${({theme}) => theme.FONT_SIZE.SMALL};
    color: ${({theme}) => theme.COLORS.PRIMARY_ERROR};
`
