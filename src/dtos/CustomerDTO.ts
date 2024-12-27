import { GroupItemDTO } from "./GroupsDTO"

export type CustomerItemDTO = {
    name: string
    ra: string
    tag: string
    group: GroupItemDTO
    biometry: string
}

export type CustomerTableDataDTO = {
    name: string
    ra: string
    tag: string
    group: string
}