import { GroupItemDTO } from './GroupsDTO'

export type CustomerItemDTO = {
  id: string
  name: string
  ra: string
  tag: string
  group: GroupItemDTO
  biometry: string
}

export type CustomerTableDataDTO = {
  id: string
  name: string
  ra: string
  tag: string
  group: string
}
