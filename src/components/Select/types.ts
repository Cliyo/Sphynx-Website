export type SelectProps = {
    label: string
    options: SelectOption[]
    errorMessage?: string
}

export type SelectOption = {
    label: string
    value: string
}