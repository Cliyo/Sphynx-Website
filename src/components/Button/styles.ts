import styled from 'styled-components'

interface ContainerProps {
  width: number
  height: number
}

export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => (width === 0 ? `100%` : `${width}px`)};
  height: ${({ height }) => (height === 0 ? `100%` : `${height}px`)};

  border-radius: 10px;
  border: 0;

  color: ${({ theme }) => theme.COLORS.NEUTRAL_0};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
  }
`
