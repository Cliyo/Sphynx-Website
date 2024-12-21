import { AccessTableData } from "dtos/AccessDTO";
import { useState } from "react";
import { app } from "services/axios";

export const useAccess = () => {
    const [ accessTableData, setAccessTableData ] = useState<AccessTableData[]>([]);

    const fetchGetAllAccess = async () => {
        const data = await app.get('/access') as AccessTableData[];
        setAccessTableData(data);
    }

    return {
        fetchGetAllAccess,
        accessTableData
    }
}

