import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  padding: 20px 40px;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXLARGE}px;
    color: ${theme.COLORS.PRIMARY_LIGHT};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
  `}
`

export const Text = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.REGULAR}px;
    color: ${theme.COLORS.NEUTRAL_500};
    font-weight: ${theme.FONT_WEIGHT.NORMAL};
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;

  width: 100%;

  margin-top: 20px;

  align-items: center;
  justify-content: center;

  gap: 10px;
`
