import { ModalProps } from "./types";
import { Button } from "components/Button";

export const Modal = (props: ModalProps) => {

    const { title, message, onClose, onConfirm } = props

    return (
        <div>
            <div> {title} </div> 
            <p> {message} </p>
            <Button onClick={onClose} text="fechar" width={120} height={50} />
            <Button onClick={onConfirm} text="confirmar" width={120} height={50} />
        </div>
    )
}