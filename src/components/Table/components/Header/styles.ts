import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    
    flex: 1;
    min-height: 50px;

    justify-content: space-between;

    border-radius: 10px 10px 0 0;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL_300};
`

export const HeaderItem = styled.div`
    display: flex;

    flex: 1;
    height: 100%;

    align-items: center;
    justify-content: center;

    font-weight: ${({theme}) => theme.FONT_WEIGHT.BOLD};
    color: ${({theme}) => theme.COLORS.NEUTRAL_900};

    text-align: center;
`