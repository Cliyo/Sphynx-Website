import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 50px;
`

export const Label = styled.p`
    ${({theme}) => css`
        color: ${theme.COLORS.NEUTRAL_900};
        font-weight: ${theme.FONT_WEIGHT.BOLD};
        font-size: ${theme.FONT_SIZE.SMALL}px;
    `}
`

export const InputCamp = styled.input`
    border: 10px;
    border: 0;

    width: 100%;
    height: 100%;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL_200};

    padding: 15px;

    border-radius: 10px;
    border: 0;

    &:focus-visible{
        outline: none;
    }
`