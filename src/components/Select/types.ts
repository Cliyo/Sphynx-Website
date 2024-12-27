export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
    options: {
        label: string
        value: string
    }[]
    errorMessage?: string
}