import { useCallback, useState } from 'react'

import { app } from 'services/axios'

import { AccessItemDTO } from 'dtos/AccessDTO'

export const useAccess = () => {
  const [accessTableData, setAccessTableData] = useState<AccessItemDTO[]>([])

  const fetchGetAllAccess = useCallback(async () => {
    const data = await app.get('/accessRegisters')
    setAccessTableData(data.data)
  }, [])

  return {
    fetchGetAllAccess,
    accessTableData,
  }
}
