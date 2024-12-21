import { useState } from "react";

import { app } from "services/axios";

import { CustomerTableData } from "dtos/CustomerDTO";

export const useCustomer = () => {
    const [ customerTableData, setCustomerTableData ] = useState<CustomerTableData[]>([]);

    const fetchGetAllCustomers = async () => {
        const data = await app.get('/customers') as CustomerTableData[];
        setCustomerTableData(data);
    }

    return {
        fetchGetAllCustomers,
        customerTableData
    }
}