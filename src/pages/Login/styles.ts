import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    flex: 1;
    height: 100%;

    justify-content: space-between;
`

export const Banner = styled.div`
    display: flex;

    height: 100%;
    width: 50%;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.PRIMARY_DARK};
`

export const Image = styled.img`
    width: 60%;
`

export const ContainerForm = styled.div`
    display: flex;

    height: 100%;
    flex: 1;

    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 70%;

    gap: 30px;
`