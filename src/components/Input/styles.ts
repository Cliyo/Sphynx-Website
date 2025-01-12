import styled, { css } from 'styled-components'

type InputCampProps = {
  hasError: boolean
}

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 50px;
`

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.COLORS.NEUTRAL_900};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.SMALL}px;
  `}
`

export const InputCamp = styled.input<InputCampProps>`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_200};

  padding: 15px;

  border-radius: 10px;
  border: ${({ hasError, theme }) =>
    hasError ? `1px solid ${theme.COLORS.ERROR_MAIN}` : `0px`};

  &:focus-visible {
    outline: none;
  }
`

export const ErrorMessage = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  margin-top: 5px;

  gap: 5px;

  ${({ theme }) => css`
    color: ${theme.COLORS.ERROR_MAIN};
    font-size: ${theme.FONT_SIZE.SMALL}px;
  `}
`
