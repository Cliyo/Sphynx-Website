import React from "react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    placeholder: string
    disabled?: boolean
    errorMessage?: string
}