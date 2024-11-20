import { CustomerTableData } from "dtos/CustomerDTO"
import { LocalTableData } from "dtos/LocalDTO"

export type TableProps = {
    headers: string[]
    content: CustomerTableData[] | LocalTableData[]
}