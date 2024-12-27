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

export const SelectInput = styled.input`
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

export const SelectOption = styled.option`
    ${({theme}) => css`
        color: ${theme.COLORS.NEUTRAL_900};
        font-size: ${theme.FONT_SIZE.SMALL}px;
    `}
`

export const ErrorMessage = styled.p`
    ${({theme}) => css`
        color: ${theme.COLORS.PRIMARY_ERROR};
        font-size: ${theme.FONT_SIZE.SMALL}px;
    `}
`