export type ModalProps = {
    title: string
    message: string
    onClose?: () => void
    onConfirm: () => void
}