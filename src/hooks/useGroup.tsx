import { useNavigate } from "react-router";

import { CreateGroupFormData } from "pages/GroupsCreate/types";
import { app } from "services/axios";

export const useGroup = () => {

    const navigate = useNavigate()

    const fetchCreateGroup = async (data: CreateGroupFormData) => {
        app.post('/groups', data)
    }

    return {
        fetchCreateGroup
    }
}