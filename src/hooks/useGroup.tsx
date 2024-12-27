import { useState } from "react";
import { app } from "services/axios";
import { useNavigate } from "react-router";

import { GroupsTableData } from "dtos/GroupsDTO";
import { CreateGroupFormData } from "pages/GroupsCreate/types";

export const useGroup = () => {

    const navigate = useNavigate()

    const [groupPageData, setGroupPageData] = useState<GroupsTableData[]>([])

    const fetchCreateGroup = async (data: CreateGroupFormData) => {
        await app.post('/groups', data)

        navigate('/groups')
    }

    const fetchGetAllGroups = async () => {
        const data = await app.get('/groups')
        setGroupPageData(data.data)
    }

    return {
        fetchCreateGroup,
        fetchGetAllGroups,
        groupPageData
    }
}