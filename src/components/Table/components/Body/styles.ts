import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    flex: 1;

    border-radius: 0 0 10px 10px;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL_0};
`

export const BodyItem = styled.div`
    display: flex;

    flex: 1;
    height: 100%;

    align-items: center;
    justify-content: center;

    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
    color: ${({theme}) => theme.COLORS.NEUTRAL_900};

    text-align: center;
`

export const BodyLine = styled.div`
    display: flex;
    
    flex: 1;
    min-height: 40px;

    justify-content: space-between;

    cursor: pointer;

    transition: 0.5s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.NEUTRAL_300};
    }

    >:last-child{
        gap: 20px;
    }
`
