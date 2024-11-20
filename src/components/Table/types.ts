import { CustomerTableData } from "dtos/CustomerDTO"

export type TableProps = {
    headers: string[]
    content: CustomerTableData[]
}