import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { app } from "services/axios";

import { GroupItemDTO } from "dtos/GroupsDTO";
import { CreateGroupFormData } from "pages/GroupsCreate/types";

export const useGroup = () => {

    const navigate = useNavigate()

    const [groupPageData, setGroupPageData] = useState<GroupItemDTO[]>([])

    const fetchCreateGroup = async (data: CreateGroupFormData) => {
        await app.post('/groups', data)

        navigate('/groups')
    }

    const fetchGetAllGroups = useCallback(async () => {
        const data = await app.get('/groups')
        setGroupPageData(data.data)
    }, [])

    const fetchGetGroupById = useCallback(async (id: string) => {
        const data = await app.get(`/groups/${id}`)
        return data.data as GroupItemDTO
    }, [])

    const fetchDeleteGroupById = async (id: string) => {
        await app.delete(`/groups/${id}`)

        navigate('/groups')
    }

    return {
        fetchCreateGroup,
        fetchGetAllGroups,
        fetchGetGroupById,
        fetchDeleteGroupById,
        groupPageData
    }
}