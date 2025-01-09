import { ModalProps } from "components/Modal/types"

export type AlertContextDataProps = {
    alert: (props: ModalProps) => void
}

export type AlertContextProviderProps = {
    children: React.ReactNode
}