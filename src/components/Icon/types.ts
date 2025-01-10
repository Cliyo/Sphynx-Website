import { theme } from 'themes'

export type IconProps = {
  name: string
  size: string
  color: keyof typeof theme.COLORS
}
