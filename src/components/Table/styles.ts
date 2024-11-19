import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    border: 0;

    width: 100%;
`

export const Header = styled.div`
    display: flex;
    
    flex: 1;

    justify-content: space-between;

    border-radius: 10px 10px 0 0;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL_300};

    padding: 15px;
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

export const Body = styled.div`
    display: flex;
    
    flex: 1;

    justify-content: space-between;

    border-radius: 0 0 10px 10px;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL_0};

    padding: 15px;
`

export const BodyLine = styled.div`
    display: flex;
    
    flex: 1;

    justify-content: space-between;

    padding: 15px;
`

export const BodyItem = styled.div`
    display: flex;

    flex: 1;
    height: 100%;

    align-items: center;
    justify-content: center;

    font-weight: ${({theme}) => theme.FONT_WEIGHT.NORMAL};
    color: ${({theme}) => theme.COLORS.NEUTRAL_900};

    text-align: center;
`